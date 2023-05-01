import React from 'react';
import { useDropzone } from 'react-dropzone';

interface Props {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File>>;
}

export default function ImageDropzone({ file, setFile }: Props) {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <>
      {!file ? (
        <section
          className="container"
          style={{
            borderStyle: 'dashed',
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.5)',
            minHeight: 128,
          }}
        >
          <div
            {...getRootProps({ className: 'dropzone' })}
            style={{ padding: 16 }}
          >
            <input {...getInputProps()} />
            <div>Drag and drop the image you want to upload for your post.</div>
          </div>
        </section>
      ) : (
        <div>
          <div>
            <div>Your Image:</div>
          </div>
          <div>
            <img
              src={URL.createObjectURL(file)}
              style={{ width: 'auto', maxHeight: 320 }}
            />
          </div>
        </div>
      )}
    </>
  );
}
