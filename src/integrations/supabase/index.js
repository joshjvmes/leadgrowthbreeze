import { supabase } from './supabase.js';
import { SupabaseAuthProvider, useSupabaseAuth, SupabaseAuthUI } from './auth.jsx';
import { useBase, useBases, useAddBase, useUpdateBase, useDeleteBase } from './hooks/useBase.js';
import { useArticle, useArticles, useAddArticle, useUpdateArticle, useDeleteArticle } from './hooks/useArticle.js';
import { useContactForm, useContactForms, useAddContactForm } from './hooks/useContactForm.js';

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
  useContactForm,
  useContactForms,
  useAddContactForm,
};