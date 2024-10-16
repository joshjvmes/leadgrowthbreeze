// Import all the relevant exports from other files in the supabase directory
import { supabase } from './supabase.js';
import { SupabaseAuthProvider, useSupabaseAuth, SupabaseAuthUI } from './auth.jsx';
import { useContact, useContacts, useAddContactForm, useUpdateContact, useDeleteContact } from './hooks/useContact';
import { useArticle, useArticles, useAddArticle, useUpdateArticle, useDeleteArticle } from './hooks/useArticles';
import { useUser, useUsers, useAddUser, useUpdateUser, useDeleteUser } from './hooks/useUsers';

// Export all the imported functions and objects
export {
  supabase,
  SupabaseAuthProvider,
  useSupabaseAuth,
  SupabaseAuthUI,
  useContact,
  useContacts,
  useAddContactForm,
  useUpdateContact,
  useDeleteContact,
  useArticle,
  useArticles,
  useAddArticle,
  useUpdateArticle,
  useDeleteArticle,
  useUser,
  useUsers,
  useAddUser,
  useUpdateUser,
  useDeleteUser,
};