import { supabase } from './supabase.js';
import { SupabaseAuthProvider, useSupabaseAuth, SupabaseAuthUI } from './auth.jsx';
import { useBase, useBases, useAddBase, useUpdateBase, useDeleteBase } from './hooks/useBase.js';
import { useArticle, useArticles, useAddArticle, useUpdateArticle, useDeleteArticle } from './hooks/useArticle.js';
import { useContact, useContactForms, useAddContactForm, useUpdateContact, useDeleteContact } from './hooks/useContact.js';

export {
  supabase,
  SupabaseAuthProvider,
  useSupabaseAuth,
  SupabaseAuthUI,
  useBase,
  useBases,
  useAddBase,
  useUpdateBase,
  useDeleteBase,
  useArticle,
  useArticles,
  useAddArticle,
  useUpdateArticle,
  useDeleteArticle,
  useContact,
  useContactForms,
  useAddContactForm,
  useUpdateContact,
  useDeleteContact,
};