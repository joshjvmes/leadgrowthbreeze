// Import all the relevant exports from other files in the supabase directory
import { supabase } from './supabase.js';
import { SupabaseAuthProvider, useSupabaseAuth, SupabaseAuthUI } from './auth.jsx';
import { useBase, useBases, useAddBase, useUpdateBase, useDeleteBase } from './hooks/useBase.js';

// Export all the imported functions and objects
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
};