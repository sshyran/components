import {omit} from 'lodash/fp';
import Desktop from './desktop';
import { VideoUploadProps } from "../..";
const props: VideoUploadProps = omit('previewLabel', Desktop.props);

export default {
  props
};
