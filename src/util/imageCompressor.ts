import imageCompression from 'browser-image-compression'

const ONE_MEGABYTE = 1048576

function isCompressed(imageFile: File, maxSizeMB: number) {
  return imageFile.size <= ONE_MEGABYTE * maxSizeMB
}

export default async function imageCompressor(imageFile: File, maxSizeMB = 2) {
  const controller = new AbortController()

  if (isCompressed(imageFile, maxSizeMB)) return imageFile

  const options = {
    maxSizeMB: maxSizeMB,
    maxWidthOrHeight: 1080,
    signal: controller.signal
  }

  setTimeout(function () {
    controller.abort(new Error('Image compressor error: timed out'))
  }, 60000)

  try {
    const compressedImage = await imageCompression(imageFile, options)
    return compressedImage
  } catch (error) {
    console.log(error)
    throw new Error('Failed to compress image file')
  }
}
