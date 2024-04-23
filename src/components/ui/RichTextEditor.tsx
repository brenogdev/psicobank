import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  EditorState,
  ContentState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { Box, Stack, Typography } from "@mui/material";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type RichTextEditorProps = {
  name: string;
  label: string;
  isRequired: boolean;
};

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  name,
  label,
  isRequired,
}) => {
  const { control, setValue } = useFormContext();

  const defaultContent =
    "Olá {{NOME_CLIENTE}}. Estou te mandando um link no qual você consegue ver a melhor forma de pagamento das nossas sessões. Obrigado!";

  const blocksFromHTML = convertFromHTML(defaultContent);
  const initialContentState = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  const initialEditorState = EditorState.createWithContent(initialContentState);

  const [editorState, setEditorState] =
    React.useState<EditorState>(initialEditorState);

  const handleEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
  };

  useEffect(() => {
    if (editorState) {
      const rawContentState = convertToRaw(editorState.getCurrentContent());
      setValue(name, rawContentState.blocks[0].text);
    }
  }, [editorState, name, setValue]);

  return (
    <Box display="flex" flexDirection="column" gap={0.5}>
      <Box
        id={`${name}-label`}
        component={"label"}
        display="flex"
        alignItems="center"
        gap={1}
      >
        <Typography variant="body1">{label}</Typography>
        {isRequired && <Stack color="red">*</Stack>}
      </Box>
      <Box width="100%">
        <Controller
          name={name}
          control={control}
          defaultValue={initialEditorState}
          render={({ field }) => (
            <Box border="1px solid #E9ECEF" borderRadius={1} p={2}>
              <Editor
                {...field}
                editorState={editorState}
                onEditorStateChange={handleEditorStateChange}
              />
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};
