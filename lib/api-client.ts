'use client'

// API client for frontend components to interact with our MongoDB backend
export const apiClient = {
  // Portfolio items
  portfolio: {
    getAll: async (category?: string, featured?: boolean) => {
      let url = '/api/portfolio';
      const params = new URLSearchParams();
      
      if (category) params.append('category', category);
      if (featured) params.append('featured', 'true');
      
      if (params.toString()) {
        url += `?${params.toString()}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio items');
      }
      
      return response.json();
    },
    
    getById: async (id: string) => {
      const response = await fetch(`/api/portfolio/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio item');
      }
      
      return response.json();
    },
    
    create: async (data: any) => {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create portfolio item');
      }
      
      return response.json();
    },
    
    update: async (id: string, data: any) => {
      const response = await fetch(`/api/portfolio/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update portfolio item');
      }
      
      return response.json();
    },
    
    delete: async (id: string) => {
      const response = await fetch(`/api/portfolio/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete portfolio item');
      }
      
      return response.json();
    },
  },
  
  // Social stats
  social: {
    getAll: async () => {
      const response = await fetch('/api/social');
      
      if (!response.ok) {
        throw new Error('Failed to fetch social stats');
      }
      
      return response.json();
    },
    
    create: async (data: any) => {
      const response = await fetch('/api/social', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create social stat');
      }
      
      return response.json();
    },
    
    update: async (id: string, data: any) => {
      const response = await fetch(`/api/social/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update social stat');
      }
      
      return response.json();
    },
    
    delete: async (id: string) => {
      const response = await fetch(`/api/social/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete social stat');
      }
      
      return response.json();
    },
  },
  
  // Media library
  media: {
    getAll: async (type?: string) => {
      let url = '/api/media';
      if (type) {
        url += `?type=${type}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch media items');
      }
      
      return response.json();
    },
    
    getById: async (id: string) => {
      const response = await fetch(`/api/media/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch media item');
      }
      
      return response.json();
    },
    
    create: async (data: any) => {
      const response = await fetch('/api/media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create media item');
      }
      
      return response.json();
    },
    
    update: async (id: string, data: any) => {
      const response = await fetch(`/api/media/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update media item');
      }
      
      return response.json();
    },
    
    delete: async (id: string) => {
      const response = await fetch(`/api/media/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete media item');
      }
      
      return response.json();
    },
    
    upload: async (formData: FormData) => {
      const response = await fetch('/api/media/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload media');
      }
      
      return response.json();
    },
  },
  
  // Contact form
  contact: {
    submit: async (data: any) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }
      
      return response.json();
    },
    
    getAll: async () => {
      const response = await fetch('/api/contact');
      
      if (!response.ok) {
        throw new Error('Failed to fetch contact submissions');
      }
      
      return response.json();
    },
    
    markAsRead: async (id: string) => {
      const response = await fetch(`/api/contact/${id}/read`, {
        method: 'PUT',
      });
      
      if (!response.ok) {
        throw new Error('Failed to mark contact as read');
      }
      
      return response.json();
    },
    
    delete: async (id: string) => {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete contact submission');
      }
      
      return response.json();
    },
  },
  
  // Settings
  settings: {
    getAll: async (category?: string) => {
      let url = '/api/settings';
      if (category) {
        url += `?category=${category}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch settings');
      }
      
      return response.json();
    },
    
    update: async (key: string, value: any) => {
      const response = await fetch(`/api/settings/${key}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update setting');
      }
      
      return response.json();
    },
  },
  
  // Authentication
  auth: {
    login: async (email: string, password: string) => {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
      
      return response.json();
    },
    
    logout: async () => {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      
      return response.json();
    },
    
    getUser: async () => {
      const response = await fetch('/api/auth/user');
      
      if (!response.ok) {
        return null;
      }
      
      return response.json();
    },
  },
};
