import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTU2ODMxMCwiZXhwIjoxOTQxMTQ0MzEwfQ.k0XAwJZsLMUpE58abg3zFe3yqv7qfeZF5MhK6MRjGHI'
export default ({ app }, inject) => {
  const supabaseUrl = 'https://olahfqhulmuvlkcazqzw.supabase.co'
  const supabaseKey = SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)

  inject('supabase', supabase)
}
