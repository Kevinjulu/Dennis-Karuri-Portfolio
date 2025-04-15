"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, FileText, Image as ImageIcon, Plus, Search, Trash2, Film, Calendar } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { apiClient } from "@/lib/api-client"
import { format } from "date-fns"
import { toast } from "sonner"
import Image from "next/image"

// Portfolio item type
interface PortfolioItem {
  _id?: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  date: Date;
  featured: boolean;
  platform?: string;
  link?: string;
  order: number;
}

export function ContentManager() {
  const [searchTerm, setSearchTerm] = useState("")
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")
  const [isEditingItem, setIsEditingItem] = useState(false)
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null)
  const [mediaItems, setMediaItems] = useState<any[]>([])
  const [isMediaDialogOpen, setIsMediaDialogOpen] = useState(false)
  const [selectedMediaUrl, setSelectedMediaUrl] = useState("")

  // Fetch portfolio items from MongoDB
  useEffect(() => {
    async function fetchPortfolioItems() {
      try {
        setIsLoading(true)
        const items = await apiClient.portfolio.getAll()
        setPortfolioItems(items)
      } catch (error) {
        console.error("Error fetching portfolio items:", error)
        toast.error("Failed to load portfolio items")
      } finally {
        setIsLoading(false)
      }
    }

    fetchPortfolioItems()
  }, [])

  // Fetch media items for selection
  useEffect(() => {
    async function fetchMediaItems() {
      try {
        const media = await apiClient.media.getAll()
        setMediaItems(media)
      } catch (error) {
        console.error("Error fetching media items:", error)
      }
    }

    fetchMediaItems()
  }, [])

  // Filter portfolio items based on search term and category
  const filteredItems = portfolioItems.filter(
    (item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.platform && item.platform.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = activeCategory === "all" || item.category === activeCategory
      
      return matchesSearch && matchesCategory
    }
  )

  // Sort items by order and date
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const handleAddItem = () => {
    setCurrentItem({
      title: "",
      description: "",
      category: "acting",
      imageUrl: "",
      date: new Date(),
      featured: false,
      order: portfolioItems.length + 1
    })
    setIsEditingItem(true)
  }

  const handleEditItem = (item: PortfolioItem) => {
    setCurrentItem({ ...item })
    setIsEditingItem(true)
  }

  const handleSaveItem = async () => {
    if (!currentItem) return

    try {
      if (currentItem._id) {
        // Update existing item
        await apiClient.portfolio.update(currentItem._id, currentItem)
        setPortfolioItems(portfolioItems.map(item => 
          item._id === currentItem._id ? currentItem : item
        ))
        toast.success("Portfolio item updated successfully")
      } else {
        // Create new item
        const newItem = await apiClient.portfolio.create(currentItem)
        setPortfolioItems([...portfolioItems, newItem])
        toast.success("Portfolio item created successfully")
      }
      setIsEditingItem(false)
      setCurrentItem(null)
    } catch (error) {
      console.error("Error saving portfolio item:", error)
      toast.error("Failed to save portfolio item")
    }
  }

  const confirmDelete = async () => {
    if (!itemToDelete) return

    try {
      await apiClient.portfolio.delete(itemToDelete)
      setPortfolioItems(portfolioItems.filter(item => item._id !== itemToDelete))
      toast.success("Portfolio item deleted successfully")
    } catch (error) {
      console.error("Error deleting portfolio item:", error)
      toast.error("Failed to delete portfolio item")
    } finally {
      setIsDeleteDialogOpen(false)
      setItemToDelete(null)
    }
  }

  const handleDeleteClick = (id: string) => {
    setItemToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const handleSelectMedia = (url: string) => {
    setSelectedMediaUrl(url)
    if (currentItem) {
      setCurrentItem({
        ...currentItem,
        imageUrl: url
      })
    }
    setIsMediaDialogOpen(false)
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "acting": return "Acting"
      case "modeling": return "Modeling"
      case "influencing": return "Influencing"
      case "presenting": return "Presenting"
      default: return category
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "acting": return "bg-blue-100 text-blue-800"
      case "modeling": return "bg-pink-100 text-pink-800"
      case "influencing": return "bg-purple-100 text-purple-800"
      case "presenting": return "bg-amber-100 text-amber-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <h2 className="text-xl font-bold">Portfolio Management</h2>

        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search portfolio..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button onClick={handleAddItem} className="bg-red-500 hover:bg-red-600">
            <Plus className="h-4 w-4 mr-2" />
            New Item
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="acting">Acting</TabsTrigger>
          <TabsTrigger value="modeling">Modeling</TabsTrigger>
          <TabsTrigger value="influencing">Influencing</TabsTrigger>
          <TabsTrigger value="presenting">Presenting</TabsTrigger>
        </TabsList>

        <TabsContent value={activeCategory} className="mt-6">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
            </div>
          ) : sortedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedItems.map((item) => (
                <div key={item._id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-video">
                    {item.imageUrl ? (
                      <Image 
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <ImageIcon className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                    {item.featured && (
                      <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="h-8 w-8 bg-white/80 hover:bg-white"
                        onClick={() => handleEditItem(item)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="destructive" 
                        className="h-8 w-8 bg-white/80 hover:bg-red-500 hover:text-white"
                        onClick={() => handleDeleteClick(item._id!)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-lg line-clamp-1">{item.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">{item.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {format(new Date(item.date), 'MMM d, yyyy')}
                      {item.platform && (
                        <span className="ml-3 flex items-center">
                          <FileText className="h-3 w-3 mr-1" />
                          {item.platform}
                        </span>
                      )}
                      {item.videoUrl && (
                        <span className="ml-3 flex items-center text-blue-500">
                          <Film className="h-3 w-3 mr-1" />
                          Video
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-8 text-center">
              <ImageIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No portfolio items found</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm 
                  ? "Try adjusting your search or category filter"
                  : "Get started by adding your first portfolio item"}
              </p>
              <Button onClick={handleAddItem} className="bg-red-500 hover:bg-red-600">
                <Plus className="h-4 w-4 mr-2" />
                Add Portfolio Item
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Edit/Create Portfolio Item Dialog */}
      <Dialog open={isEditingItem} onOpenChange={setIsEditingItem}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{currentItem?._id ? "Edit Portfolio Item" : "Add Portfolio Item"}</DialogTitle>
            <DialogDescription>
              {currentItem?._id 
                ? "Update the details of this portfolio item" 
                : "Add a new item to your portfolio"}
            </DialogDescription>
          </DialogHeader>

          {currentItem && (
            <div className="grid grid-cols-1 gap-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={currentItem.title}
                  onChange={(e) => setCurrentItem({ ...currentItem, title: e.target.value })}
                  placeholder="Enter title"
                />
              </div>

              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={currentItem.description}
                  onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
                  placeholder="Enter description"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={currentItem.category}
                    onValueChange={(value) => setCurrentItem({ ...currentItem, category: value })}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acting">Acting</SelectItem>
                      <SelectItem value="modeling">Modeling</SelectItem>
                      <SelectItem value="influencing">Influencing</SelectItem>
                      <SelectItem value="presenting">Presenting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="platform">Platform (Optional)</Label>
                  <Input
                    id="platform"
                    value={currentItem.platform || ""}
                    onChange={(e) => setCurrentItem({ ...currentItem, platform: e.target.value })}
                    placeholder="e.g. Netflix, Showmax"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="order">Display Order</Label>
                  <Input
                    id="order"
                    type="number"
                    value={currentItem.order}
                    onChange={(e) => setCurrentItem({ ...currentItem, order: parseInt(e.target.value) })}
                    min={1}
                  />
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={currentItem.date instanceof Date 
                      ? currentItem.date.toISOString().split('T')[0]
                      : new Date(currentItem.date).toISOString().split('T')[0]}
                    onChange={(e) => setCurrentItem({ 
                      ...currentItem, 
                      date: new Date(e.target.value) 
                    })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="imageUrl">Image</Label>
                  <div className="flex gap-2">
                    <Input
                      id="imageUrl"
                      value={currentItem.imageUrl}
                      onChange={(e) => setCurrentItem({ ...currentItem, imageUrl: e.target.value })}
                      placeholder="Image URL"
                    />
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setIsMediaDialogOpen(true)}
                    >
                      Browse
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="videoUrl">Video URL (Optional)</Label>
                  <Input
                    id="videoUrl"
                    value={currentItem.videoUrl || ""}
                    onChange={(e) => setCurrentItem({ ...currentItem, videoUrl: e.target.value })}
                    placeholder="e.g. YouTube URL"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="link">External Link (Optional)</Label>
                  <Input
                    id="link"
                    value={currentItem.link || ""}
                    onChange={(e) => setCurrentItem({ ...currentItem, link: e.target.value })}
                    placeholder="e.g. https://example.com"
                  />
                </div>

                <div className="flex items-center space-x-2 mt-8">
                  <Checkbox
                    id="featured"
                    checked={currentItem.featured}
                    onCheckedChange={(checked) => 
                      setCurrentItem({ ...currentItem, featured: checked as boolean })
                    }
                  />
                  <label
                    htmlFor="featured"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Featured item (shown prominently)
                  </label>
                </div>
              </div>

              {currentItem.imageUrl && (
                <div className="mt-2">
                  <Label className="mb-2 block">Image Preview</Label>
                  <div className="relative h-40 bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={currentItem.imageUrl}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditingItem(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveItem} className="bg-red-500 hover:bg-red-600">
              {currentItem?._id ? "Update Item" : "Add Item"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this portfolio item? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Media Selection Dialog */}
      <Dialog open={isMediaDialogOpen} onOpenChange={setIsMediaDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Select Media</DialogTitle>
            <DialogDescription>
              Choose an image from your media library
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
            {mediaItems.filter(item => item.type === 'image').map((item) => (
              <div 
                key={item._id} 
                className="relative aspect-square rounded-md overflow-hidden border cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => handleSelectMedia(item.url)}
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            
            {mediaItems.length === 0 && (
              <div className="col-span-full text-center py-8">
                <p>No media items found. Upload images in the Media tab.</p>
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsMediaDialogOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
