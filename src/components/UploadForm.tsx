import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { saveClothingItem } from "@/utils/storage";
import { v4 as uuidv4 } from "uuid";

export const UploadForm = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        saveClothingItem({
          id: uuidv4(),
          image: base64,
          type: "",
          color: "",
          occasion: "",
        });
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
  });

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <div {...getRootProps()} className="upload-dropzone">
        <input {...getInputProps()} />
        <p>Flasher votre dressing pour upload</p>
      </div>

      <div className="space-y-4">
        <Select>
          <option value="">Type de vêtement</option>
          <option value="t-shirt">T-shirt</option>
          <option value="pantalon">Pantalon</option>
          <option value="pull">Pull</option>
          <option value="manteau">Manteau</option>
        </Select>

        <Select>
          <option value="">Couleur</option>
          <option value="noir">Noir</option>
          <option value="blanc">Blanc</option>
          <option value="bleu">Bleu</option>
          <option value="rouge">Rouge</option>
        </Select>

        <Select>
          <option value="">Occasion</option>
          <option value="casual">Décontracté</option>
          <option value="work">Professionnel</option>
          <option value="sport">Sport</option>
        </Select>

        <Button className="w-full">Ajouter à ma garde-robe</Button>
      </div>
    </div>
  );
};