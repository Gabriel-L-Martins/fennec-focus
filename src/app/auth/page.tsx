'use client'

import { supabase } from '@/lib/supabaseClient'

export default function Auth() {
  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error) console.error('GitHub OAuth Error:', error.message)
  }

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) console.error('Google OAuth Error:', error.message)
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={signInWithGitHub}>Sign in with GitHub</button>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}
