import React from 'react';
import DragAndDrop from '../drag-and-drop';
import style from './style.module.css';

export type VideoUploadProps = {
  title: string,
  description: string,
  previewLabel: string,
  uploadLabel: string,
  previewContent: {
    type: String,
    src: string
  },
  loading: boolean,
  modified: boolean,
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined,
  name: string
}; 

const VideoUpload = ({
  title,
  description,
  previewLabel,
  uploadLabel,
  previewContent,
  loading,
  modified,
  onChange,
  name
}: VideoUploadProps) => (
  <DragAndDrop
    title={title}
    description={description}
    previewLabel={previewLabel}
    uploadLabel={uploadLabel}
    previewContent={previewContent}
    loading={loading}
    modified={modified}
  >
    {(onDragStart: ((event: React.DragEvent<HTMLInputElement>) => void) | undefined, onDragStop: ((event: React.DragEvent<HTMLInputElement>) => void) | undefined) => (
      <input
        type="file"
        name={name}
        accept="video/*"
        disabled={loading}
        className={style.input}
        onChange={onChange}
        onDragEnter={onDragStart}
        onDrop={onDragStop}
        onDragLeave={onDragStop}
      />
    )}
  </DragAndDrop>
);

export default VideoUpload;
