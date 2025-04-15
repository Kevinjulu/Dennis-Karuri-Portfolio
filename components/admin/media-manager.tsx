"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Grid,
  List,
  Search,
  Upload,
  ImageIcon,
  Film,
  FileText,
  MoreVertical,
  Download,
  Copy,
  Edit,
  Trash2,
} from "lucide-react"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { apiClient } from "@/lib/api-client"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

// Media file type
interface MediaFile {
  _id: string;
  title: string;
  description: string;
  type: string;
  url: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  alt?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export function MediaManager() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFiles, setSelectedFiles] = useState<string[]>([])
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([])
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [fileToDelete, setFileToDelete] = useState<string | null>(null)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentFile, setCurrentFile] = useState<MediaFile | null>(null)
  const [uploadError, setUploadError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  // Fetch media files on component mount
  useEffect(() => {
    fetchMediaFiles()
  }, [])

  const fetchMediaFiles = async () => {
    setIsLoading(true)
    try {
      const data = await apiClient.media.getAll()
      setMediaFiles(data)
    } catch (error) {
      console.error("Error fetching media files:", error)
      toast({
        title: "Error",
        description: "Failed to fetch media files",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const filteredMedia = mediaFiles.filter((file) => 
    file.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    file.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleFileSelection = (id: string) => {
    const fileIndex = selectedFiles.findIndex((fileId) => fileId === id)
    if (fileIndex === -1) {
      setSelectedFiles([...selectedFiles, id])
    } else {
      setSelectedFiles(selectedFiles.filter((fileId) => fileId !== id))
    }
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-5 w-5 text-blue-500" />
      case "video":
        return <Film className="h-5 w-5 text-purple-500" />
      case "audio":
        return <FileText className="h-5 w-5 text-green-500" />
      case "document":
        return <FileText className="h-5 w-5 text-amber-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B'
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
    else return (bytes / 1048576).toFixed(1) + ' MB'
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files))
    }
  }

  const handleFiles = (files: File[]) => {
    setUploadedFiles(files)
    setUploadError("")
  }

  const handleUpload = async () => {
    if (uploadedFiles.length === 0) {
      setUploadError("Please select files to upload")
      return
    }

    setIsUploading(true)
    
    try {
      // Upload each file one by one
      for (const file of uploadedFiles) {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', file.name)
        formData.append('description', '')
        
        await apiClient.media.upload(formData)
      }
      
      // Refresh the media list
      await fetchMediaFiles()
      
      // Reset state
      setUploadedFiles([])
      setIsUploadDialogOpen(false)
      
      toast({
        title: "Success",
        description: `${uploadedFiles.length} file(s) uploaded successfully`,
      })
    } catch (error) {
      console.error("Error uploading files:", error)
      toast({
        title: "Error",
        description: "Failed to upload files",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleEditFile = (file: MediaFile) => {
    setCurrentFile({ ...file })
    setIsEditDialogOpen(true)
  }

  const handleSaveEdit = async () => {
    if (!currentFile) return
    
    try {
      await apiClient.media.update(currentFile._id, currentFile)
      
      // Update local state
      setMediaFiles(mediaFiles.map((file) => (file._id === currentFile._id ? currentFile : file)))
      
      toast({
        title: "Success",
        description: "Media updated successfully",
      })
    } catch (error) {
      console.error("Error updating media:", error)
      toast({
        title: "Error",
        description: "Failed to update media",
        variant: "destructive",
      })
    } finally {
      setIsEditDialogOpen(false)
      setCurrentFile(null)
    }
  }

  const handleDeleteClick = (id: string) => {
    setFileToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (fileToDelete !== null) {
      try {
        await apiClient.media.delete(fileToDelete)
        
        // Update local state
        setMediaFiles(mediaFiles.filter((file) => file._id !== fileToDelete))
        
        toast({
          title: "Success",
          description: "Media deleted successfully",
        })
      } catch (error) {
        console.error("Error deleting media:", error)
        toast({
          title: "Error",
          description: "Failed to delete media",
          variant: "destructive",
        })
      } finally {
        setIsDeleteDialogOpen(false)
        setFileToDelete(null)
      }
    }
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast({
          title: "URL Copied",
          description: "Media URL copied to clipboard",
        })
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <h2 className="text-xl font-bold">Media Library</h2>

        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search media..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="bg-red-500 hover:bg-red-600" onClick={() => setIsUploadDialogOpen(true)}>
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div>
            <span className="text-sm text-muted-foreground">
              {selectedFiles.length > 0 ? `${selectedFiles.length} selected` : `${filteredMedia.length} items`}
            </span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 w-8 p-0 ${view === "grid" ? "bg-gray-100" : ""}`}
              onClick={() => setView("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 w-8 p-0 ${view === "list" ? "bg-gray-100" : ""}`}
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="p-8 flex justify-center items-center">
            <Loader2 className="h-8 w-8 animate-spin text-red-500" />
          </div>
        ) : (
          <>
            {/* Grid View */}
            {view === "grid" && (
              <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredMedia.length === 0 ? (
                  <div className="col-span-full p-8 text-center text-muted-foreground">
                    No media files found
                  </div>
                ) : (
                  filteredMedia.map((file) => (
                    <div
                      key={file._id}
                      className={`relative group rounded-lg border border-gray-200 overflow-hidden ${
                        selectedFiles.includes(file._id) ? "ring-2 ring-red-500" : ""
                      }`}
                      onClick={() => toggleFileSelection(file._id)}
                    >
                      <div className="aspect-square relative bg-gray-50">
                        {file.type === "image" ? (
                          <Image src={file.url || "/placeholder.svg"} alt={file.title} fill className="object-cover" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">{getFileIcon(file.type)}</div>
                        )}

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleEditFile(file)
                                  }}
                                >
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    window.open(file.url, "_blank")
                                  }}
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    copyToClipboard(file.url)
                                  }}
                                >
                                  <Copy className="h-4 w-4 mr-2" />
                                  Copy URL
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleDeleteClick(file._id)
                                  }}
                                >
                                  <Trash2 className="h-4 w-4 mr-2 text-red-500" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <p className="text-sm font-medium truncate">{file.title}</p>
                        <p className="text-xs text-muted-foreground">{formatFileSize(file.fileSize)}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* List View */}
            {view === "list" && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Size
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMedia.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                          No media files found
                        </td>
                      </tr>
                    ) : (
                      filteredMedia.map((file) => (
                        <tr
                          key={file._id}
                          className={`border-b border-gray-200 hover:bg-gray-50 ${
                            selectedFiles.includes(file._id) ? "bg-red-50" : ""
                          }`}
                          onClick={() => toggleFileSelection(file._id)}
                        >
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8 mr-3 flex items-center justify-center">
                                {file.type === "image" ? (
                                  <div className="h-8 w-8 rounded overflow-hidden relative">
                                    <Image src={file.url || "/placeholder.svg"} alt={file.title} fill className="object-cover" />
                                  </div>
                                ) : (
                                  getFileIcon(file.type)
                                )}
                              </div>
                              <div className="text-sm font-medium">{file.title}</div>
                            </div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm">{file.type}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm">{formatFileSize(file.fileSize)}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="text-sm">{new Date(file.createdAt).toLocaleDateString()}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleEditFile(file)
                                  }}
                                >
                                  <Edit className="h-4 w-4 mr-2" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    window.open(file.url, "_blank")
                                  }}
                                >
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    copyToClipboard(file.url)
                                  }}
                                >
                                  <Copy className="h-4 w-4 mr-2" />
                                  Copy URL
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleDeleteClick(file._id)
                                  }}
                                >
                                  <Trash2 className="h-4 w-4 mr-2 text-red-500" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>

      {/* Upload Dialog */}
      <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload Media</DialogTitle>
            <DialogDescription>Upload images, videos, or documents to your media library.</DialogDescription>
          </DialogHeader>
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center ${
              dragActive ? "border-red-500 bg-red-50" : "border-gray-300"
            }`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <div className="space-y-4">
              <div className="flex justify-center">
                <Upload className="h-10 w-10 text-gray-400" />
              </div>
              <div>
                <p className="text-sm font-medium">Drag and drop files here or click to browse</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Supports images, videos, and documents up to 10MB
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="relative"
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>Browse Files</>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                  disabled={isUploading}
                />
              </Button>
            </div>
          </div>

          {uploadError && <p className="text-sm text-red-500 mt-2">{uploadError}</p>}

          {uploadedFiles.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Selected Files ({uploadedFiles.length})</h4>
              <div className="max-h-40 overflow-y-auto space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="text-sm flex items-center justify-between">
                    <div className="flex items-center">
                      {file.type.startsWith("image/") ? (
                        <ImageIcon className="h-4 w-4 mr-2 text-blue-500" />
                      ) : file.type.startsWith("video/") ? (
                        <Film className="h-4 w-4 mr-2 text-purple-500" />
                      ) : (
                        <FileText className="h-4 w-4 mr-2 text-amber-500" />
                      )}
                      <span className="truncate max-w-[200px]">{file.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {(file.size / (1024 * 1024)).toFixed(1)} MB
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <DialogFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)} disabled={isUploading}>
              Cancel
            </Button>
            <Button onClick={handleUpload} className="bg-red-500 hover:bg-red-600" disabled={isUploading}>
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>Upload</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Media</DialogTitle>
            <DialogDescription>Update the details of this media item.</DialogDescription>
          </DialogHeader>
          {currentFile && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={currentFile.title}
                  onChange={(e) => setCurrentFile({ ...currentFile, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={currentFile.description}
                  onChange={(e) => setCurrentFile({ ...currentFile, description: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alt">Alt Text (for images)</Label>
                <Input
                  id="alt"
                  value={currentFile.alt || ""}
                  onChange={(e) => setCurrentFile({ ...currentFile, alt: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={currentFile.tags?.join(", ") || ""}
                  onChange={(e) =>
                    setCurrentFile({
                      ...currentFile,
                      tags: e.target.value.split(",").map((tag) => tag.trim()).filter(Boolean),
                    })
                  }
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} className="bg-red-500 hover:bg-red-600">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Media</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this media item? This action cannot be undone.
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
    </div>
  )
}
