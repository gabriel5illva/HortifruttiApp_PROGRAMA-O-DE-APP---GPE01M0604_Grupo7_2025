import { supabase } from './supabase';

function getMimeType(uri: string): string {
  if (uri.endsWith('.png')) return 'image/png';
  if (uri.endsWith('.jpg') || uri.endsWith('.jpeg')) return 'image/jpeg';
  return 'application/octet-stream';
}

export async function uploadImageAsync(
  uri: string,
  bucket: string,
  filePath: string
): Promise<string> {
  const response = await fetch(uri);
  const blob = await response.blob();
  const contentType = getMimeType(uri);

  const { error } = await supabase.storage.from(bucket).upload(filePath, blob, {
    upsert: true,
    contentType,
  });

  if (error) throw error;

  const { data: publicData } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return publicData.publicUrl;
}
