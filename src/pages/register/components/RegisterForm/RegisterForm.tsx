import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Storage, API } from 'aws-amplify';
import { createClubs } from '../../../../graphql/mutations';
import { useDropzone } from 'react-dropzone';
import ImageDropZone from './ImageDropZone';

interface RegisterForm_Props {
  onSubmit: (data: any) => void;
}

const RegisterForm = () => {
  // { onSubmit }: RegisterForm_Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [ProfileFile, setProfileFile] = useState<File | null>(null);
  const [HeadingFile, setHeadingFile] = useState<File | null>(null);
  const [appOpen, setAppOpen] = useState<Boolean | null>(null);
  const [appReq, setAppReq] = useState<Boolean | null>(null);

  const handleAppOpen = (e: any) => {
    setAppOpen(true);
  };
  const handleAppClosed = (e: any) => {
    setAppOpen(false);
  };
  const handleAppRequired = (e: any) => {
    setAppReq(true);
  };
  const handleAppNotRequired = (e: any) => {
    setAppReq(false);
  };

  async function saveProduct(data: any) {
    await Storage.put(data.Name + 'ProfilePhoto', ProfileFile);
    await Storage.put(data.Name + 'HeadingPhoto', HeadingFile);
    const club = {
      name: data.Name,
      abbreviation: data.Abbreviation,
      description: data.Description,
      profilePhoto: data.Name + 'ProfilePhoto',
      headingPhoto: data.Name + 'HeadingPhoto',
      isApplicationOpen: appOpen,
      isApplicationRequired: appReq,
      numMembers: parseInt(data.numMembers),

      yearFounded: data.yearFounded,
      website: data.Website,
      instagram: data.Instagram,
      linkedin: data.Linkedin,
      facebook: data.Facebook,
      twitter: data.Twitter,
      discord: data.Discord,
      email: data.email,
    };
    console.log(club);
    await API.graphql({ query: createClubs, variables: { input: club } });
  }

  const onSubmit = (e: any) => {
    // e.preventDefault();
    saveProduct(e);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span>Name</span>
      <input
        type="text"
        {...register('Name', {
          required: true,
        })}
      />
      <span>Abbreviation</span>
      <input
        type="text"
        {...register('Abbreviation', {
          required: true,
        })}
      />
      <span>Description</span>
      <input
        type="text"
        {...register('Description', {
          required: true,
        })}
      />
      <span>Profile Photo</span>
      <ImageDropZone file={ProfileFile} setFile={setProfileFile} />
      <span>Heading Photo</span>
      <ImageDropZone file={HeadingFile} setFile={setHeadingFile} />

      <span>Is Application Open</span>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="appOpen"
            checked={appOpen === true}
            onChange={handleAppOpen}
          />
          Yes
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="appClosed"
            checked={appOpen === false}
            onChange={handleAppClosed}
          />
          No
        </label>
      </div>

      <span>Is Application Required</span>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="appRequired"
            checked={appReq === true}
            onChange={handleAppRequired}
          />
          Yes
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="appNotRequired"
            checked={appReq === false}
            onChange={handleAppNotRequired}
          />
          No
        </label>
      </div>

      <span>Num members</span>
      <input
        type="text"
        {...register('numMembers', {
          required: true,
        })}
      />
      <span>Year founded</span>
      <input
        type="text"
        {...register('yearFounded', {
          required: true,
        })}
      />
      <span>Website</span>
      <input
        type="text"
        {...register('Website', {
          required: true,
        })}
      />
      <span>Instagram</span>
      <input
        type="text"
        {...register('Instagram', {
          required: true,
        })}
      />
      <span>Linkedin</span>
      <input
        type="text"
        {...register('Linkedin', {
          required: true,
        })}
      />
      <span>Facebook</span>
      <input
        type="text"
        {...register('Facebook', {
          required: true,
        })}
      />
      <span>Twitter</span>
      <input
        type="text"
        {...register('Twitter', {
          required: true,
        })}
      />
      <span>Discord</span>
      <input
        type="text"
        {...register('Discord', {
          required: true,
        })}
      />
      <span>Email</span>
      <input
        type="email"
        {...register('email', {
          required: true,
        })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
