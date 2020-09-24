import { VideoUploadProps } from "../..";

const props: VideoUploadProps = {
  title: 'Desktop (*)',
  uploadLabel: 'Upload',
  previewLabel: 'Preview',
  onChange: () => true,
  previewContent: {
    type: 'video',
    src: 'https://www.w3schools.com/tags/movie.mp4'
  }
};

export default {
  props
};
