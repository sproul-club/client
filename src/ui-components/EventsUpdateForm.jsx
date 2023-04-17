/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Events } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EventsUpdateForm(props) {
  const {
    id: idProp,
    events: eventsModelProp,
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
    description: "",
    startTimeStamp: "",
    endTimeStamp: "",
    location: "",
    meetingUrl: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [startTimeStamp, setStartTimeStamp] = React.useState(
    initialValues.startTimeStamp
  );
  const [endTimeStamp, setEndTimeStamp] = React.useState(
    initialValues.endTimeStamp
  );
  const [location, setLocation] = React.useState(initialValues.location);
  const [meetingUrl, setMeetingUrl] = React.useState(initialValues.meetingUrl);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventsRecord
      ? { ...initialValues, ...eventsRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setStartTimeStamp(cleanValues.startTimeStamp);
    setEndTimeStamp(cleanValues.endTimeStamp);
    setLocation(cleanValues.location);
    setMeetingUrl(cleanValues.meetingUrl);
    setErrors({});
  };
  const [eventsRecord, setEventsRecord] = React.useState(eventsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Events, idProp)
        : eventsModelProp;
      setEventsRecord(record);
    };
    queryData();
  }, [idProp, eventsModelProp]);
  React.useEffect(resetStateValues, [eventsRecord]);
  const validations = {
    name: [],
    description: [],
    startTimeStamp: [],
    endTimeStamp: [],
    location: [],
    meetingUrl: [{ type: "URL" }],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          description,
          startTimeStamp,
          endTimeStamp,
          location,
          meetingUrl,
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
          await DataStore.save(
            Events.copyOf(eventsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EventsUpdateForm")}
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
              description,
              startTimeStamp,
              endTimeStamp,
              location,
              meetingUrl,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              startTimeStamp,
              endTimeStamp,
              location,
              meetingUrl,
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
        label="Start time stamp"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={startTimeStamp && convertToLocal(new Date(startTimeStamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              description,
              startTimeStamp: value,
              endTimeStamp,
              location,
              meetingUrl,
            };
            const result = onChange(modelFields);
            value = result?.startTimeStamp ?? value;
          }
          if (errors.startTimeStamp?.hasError) {
            runValidationTasks("startTimeStamp", value);
          }
          setStartTimeStamp(value);
        }}
        onBlur={() => runValidationTasks("startTimeStamp", startTimeStamp)}
        errorMessage={errors.startTimeStamp?.errorMessage}
        hasError={errors.startTimeStamp?.hasError}
        {...getOverrideProps(overrides, "startTimeStamp")}
      ></TextField>
      <TextField
        label="End time stamp"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={endTimeStamp && convertToLocal(new Date(endTimeStamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              description,
              startTimeStamp,
              endTimeStamp: value,
              location,
              meetingUrl,
            };
            const result = onChange(modelFields);
            value = result?.endTimeStamp ?? value;
          }
          if (errors.endTimeStamp?.hasError) {
            runValidationTasks("endTimeStamp", value);
          }
          setEndTimeStamp(value);
        }}
        onBlur={() => runValidationTasks("endTimeStamp", endTimeStamp)}
        errorMessage={errors.endTimeStamp?.errorMessage}
        hasError={errors.endTimeStamp?.hasError}
        {...getOverrideProps(overrides, "endTimeStamp")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              startTimeStamp,
              endTimeStamp,
              location: value,
              meetingUrl,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Meeting url"
        isRequired={false}
        isReadOnly={false}
        value={meetingUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              startTimeStamp,
              endTimeStamp,
              location,
              meetingUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.meetingUrl ?? value;
          }
          if (errors.meetingUrl?.hasError) {
            runValidationTasks("meetingUrl", value);
          }
          setMeetingUrl(value);
        }}
        onBlur={() => runValidationTasks("meetingUrl", meetingUrl)}
        errorMessage={errors.meetingUrl?.errorMessage}
        hasError={errors.meetingUrl?.hasError}
        {...getOverrideProps(overrides, "meetingUrl")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || eventsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || eventsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
