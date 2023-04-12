/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Clubs } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ClubsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    abbreviation: "",
    description: "",
    profilePhoto: "",
    headingPhoto: "",
    isApplicationOpen: false,
    categories: [],
    numMembers: "",
    yearFounded: "",
    website: "",
    instagram: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    discord: "",
    email: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [abbreviation, setAbbreviation] = React.useState(
    initialValues.abbreviation
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [profilePhoto, setProfilePhoto] = React.useState(
    initialValues.profilePhoto
  );
  const [headingPhoto, setHeadingPhoto] = React.useState(
    initialValues.headingPhoto
  );
  const [isApplicationOpen, setIsApplicationOpen] = React.useState(
    initialValues.isApplicationOpen
  );
  const [categories, setCategories] = React.useState(initialValues.categories);
  const [numMembers, setNumMembers] = React.useState(initialValues.numMembers);
  const [yearFounded, setYearFounded] = React.useState(
    initialValues.yearFounded
  );
  const [website, setWebsite] = React.useState(initialValues.website);
  const [instagram, setInstagram] = React.useState(initialValues.instagram);
  const [linkedin, setLinkedin] = React.useState(initialValues.linkedin);
  const [facebook, setFacebook] = React.useState(initialValues.facebook);
  const [twitter, setTwitter] = React.useState(initialValues.twitter);
  const [discord, setDiscord] = React.useState(initialValues.discord);
  const [email, setEmail] = React.useState(initialValues.email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setAbbreviation(initialValues.abbreviation);
    setDescription(initialValues.description);
    setProfilePhoto(initialValues.profilePhoto);
    setHeadingPhoto(initialValues.headingPhoto);
    setIsApplicationOpen(initialValues.isApplicationOpen);
    setCategories(initialValues.categories);
    setCurrentCategoriesValue("");
    setNumMembers(initialValues.numMembers);
    setYearFounded(initialValues.yearFounded);
    setWebsite(initialValues.website);
    setInstagram(initialValues.instagram);
    setLinkedin(initialValues.linkedin);
    setFacebook(initialValues.facebook);
    setTwitter(initialValues.twitter);
    setDiscord(initialValues.discord);
    setEmail(initialValues.email);
    setErrors({});
  };
  const [currentCategoriesValue, setCurrentCategoriesValue] =
    React.useState("");
  const categoriesRef = React.createRef();
  const validations = {
    name: [],
    abbreviation: [],
    description: [],
    profilePhoto: [],
    headingPhoto: [],
    isApplicationOpen: [],
    categories: [],
    numMembers: [],
    yearFounded: [],
    website: [],
    instagram: [],
    linkedin: [],
    facebook: [],
    twitter: [],
    discord: [],
    email: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          abbreviation,
          description,
          profilePhoto,
          headingPhoto,
          isApplicationOpen,
          categories,
          numMembers,
          yearFounded,
          website,
          instagram,
          linkedin,
          facebook,
          twitter,
          discord,
          email,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Clubs(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClubsCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Abbreviation"
        isRequired={false}
        isReadOnly={false}
        value={abbreviation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation: value,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.abbreviation ?? value;
          }
          if (errors.abbreviation?.hasError) {
            runValidationTasks("abbreviation", value);
          }
          setAbbreviation(value);
        }}
        onBlur={() => runValidationTasks("abbreviation", abbreviation)}
        errorMessage={errors.abbreviation?.errorMessage}
        hasError={errors.abbreviation?.hasError}
        {...getOverrideProps(overrides, "abbreviation")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description: value,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Profile photo"
        isRequired={false}
        isReadOnly={false}
        value={profilePhoto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto: value,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.profilePhoto ?? value;
          }
          if (errors.profilePhoto?.hasError) {
            runValidationTasks("profilePhoto", value);
          }
          setProfilePhoto(value);
        }}
        onBlur={() => runValidationTasks("profilePhoto", profilePhoto)}
        errorMessage={errors.profilePhoto?.errorMessage}
        hasError={errors.profilePhoto?.hasError}
        {...getOverrideProps(overrides, "profilePhoto")}
      ></TextField>
      <TextField
        label="Heading photo"
        isRequired={false}
        isReadOnly={false}
        value={headingPhoto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto: value,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.headingPhoto ?? value;
          }
          if (errors.headingPhoto?.hasError) {
            runValidationTasks("headingPhoto", value);
          }
          setHeadingPhoto(value);
        }}
        onBlur={() => runValidationTasks("headingPhoto", headingPhoto)}
        errorMessage={errors.headingPhoto?.errorMessage}
        hasError={errors.headingPhoto?.hasError}
        {...getOverrideProps(overrides, "headingPhoto")}
      ></TextField>
      <SwitchField
        label="Is application open"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isApplicationOpen}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen: value,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.isApplicationOpen ?? value;
          }
          if (errors.isApplicationOpen?.hasError) {
            runValidationTasks("isApplicationOpen", value);
          }
          setIsApplicationOpen(value);
        }}
        onBlur={() =>
          runValidationTasks("isApplicationOpen", isApplicationOpen)
        }
        errorMessage={errors.isApplicationOpen?.errorMessage}
        hasError={errors.isApplicationOpen?.hasError}
        {...getOverrideProps(overrides, "isApplicationOpen")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories: values,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            values = result?.categories ?? values;
          }
          setCategories(values);
          setCurrentCategoriesValue("");
        }}
        currentFieldValue={currentCategoriesValue}
        label={"Categories"}
        items={categories}
        hasError={errors?.categories?.hasError}
        errorMessage={errors?.categories?.errorMessage}
        setFieldValue={setCurrentCategoriesValue}
        inputFieldRef={categoriesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Categories"
          isRequired={false}
          isReadOnly={false}
          value={currentCategoriesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.categories?.hasError) {
              runValidationTasks("categories", value);
            }
            setCurrentCategoriesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("categories", currentCategoriesValue)
          }
          errorMessage={errors.categories?.errorMessage}
          hasError={errors.categories?.hasError}
          ref={categoriesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "categories")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Num members"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numMembers}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers: value,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.numMembers ?? value;
          }
          if (errors.numMembers?.hasError) {
            runValidationTasks("numMembers", value);
          }
          setNumMembers(value);
        }}
        onBlur={() => runValidationTasks("numMembers", numMembers)}
        errorMessage={errors.numMembers?.errorMessage}
        hasError={errors.numMembers?.hasError}
        {...getOverrideProps(overrides, "numMembers")}
      ></TextField>
      <TextField
        label="Year founded"
        isRequired={false}
        isReadOnly={false}
        value={yearFounded}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded: value,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.yearFounded ?? value;
          }
          if (errors.yearFounded?.hasError) {
            runValidationTasks("yearFounded", value);
          }
          setYearFounded(value);
        }}
        onBlur={() => runValidationTasks("yearFounded", yearFounded)}
        errorMessage={errors.yearFounded?.errorMessage}
        hasError={errors.yearFounded?.hasError}
        {...getOverrideProps(overrides, "yearFounded")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website: value,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.website ?? value;
          }
          if (errors.website?.hasError) {
            runValidationTasks("website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("website", website)}
        errorMessage={errors.website?.errorMessage}
        hasError={errors.website?.hasError}
        {...getOverrideProps(overrides, "website")}
      ></TextField>
      <TextField
        label="Instagram"
        isRequired={false}
        isReadOnly={false}
        value={instagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram: value,
              linkedin,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.instagram ?? value;
          }
          if (errors.instagram?.hasError) {
            runValidationTasks("instagram", value);
          }
          setInstagram(value);
        }}
        onBlur={() => runValidationTasks("instagram", instagram)}
        errorMessage={errors.instagram?.errorMessage}
        hasError={errors.instagram?.hasError}
        {...getOverrideProps(overrides, "instagram")}
      ></TextField>
      <TextField
        label="Linkedin"
        isRequired={false}
        isReadOnly={false}
        value={linkedin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin: value,
              facebook,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.linkedin ?? value;
          }
          if (errors.linkedin?.hasError) {
            runValidationTasks("linkedin", value);
          }
          setLinkedin(value);
        }}
        onBlur={() => runValidationTasks("linkedin", linkedin)}
        errorMessage={errors.linkedin?.errorMessage}
        hasError={errors.linkedin?.hasError}
        {...getOverrideProps(overrides, "linkedin")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        value={facebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook: value,
              twitter,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.facebook ?? value;
          }
          if (errors.facebook?.hasError) {
            runValidationTasks("facebook", value);
          }
          setFacebook(value);
        }}
        onBlur={() => runValidationTasks("facebook", facebook)}
        errorMessage={errors.facebook?.errorMessage}
        hasError={errors.facebook?.hasError}
        {...getOverrideProps(overrides, "facebook")}
      ></TextField>
      <TextField
        label="Twitter"
        isRequired={false}
        isReadOnly={false}
        value={twitter}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter: value,
              discord,
              email,
            };
            const result = onChange(modelFields);
            value = result?.twitter ?? value;
          }
          if (errors.twitter?.hasError) {
            runValidationTasks("twitter", value);
          }
          setTwitter(value);
        }}
        onBlur={() => runValidationTasks("twitter", twitter)}
        errorMessage={errors.twitter?.errorMessage}
        hasError={errors.twitter?.hasError}
        {...getOverrideProps(overrides, "twitter")}
      ></TextField>
      <TextField
        label="Discord"
        isRequired={false}
        isReadOnly={false}
        value={discord}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord: value,
              email,
            };
            const result = onChange(modelFields);
            value = result?.discord ?? value;
          }
          if (errors.discord?.hasError) {
            runValidationTasks("discord", value);
          }
          setDiscord(value);
        }}
        onBlur={() => runValidationTasks("discord", discord)}
        errorMessage={errors.discord?.errorMessage}
        hasError={errors.discord?.hasError}
        {...getOverrideProps(overrides, "discord")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              abbreviation,
              description,
              profilePhoto,
              headingPhoto,
              isApplicationOpen,
              categories,
              numMembers,
              yearFounded,
              website,
              instagram,
              linkedin,
              facebook,
              twitter,
              discord,
              email: value,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
