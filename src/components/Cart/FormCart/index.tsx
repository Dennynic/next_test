import React, { FC } from "react";
import { FormikProps } from "formik";
import { Input } from "@/components/ui/Input";
import { FormItems } from "@/components/ui/FormItems";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

interface FormValues {
  phone: string;
  [key: string]: string;
}
interface FormCartProps {
  isButtonDisable: boolean;
  formik: FormikProps<FormValues>;
  submittingError?: string | null;
  successMessageVisible?: boolean;
  handleInputChange: (name: string, value: string) => void;
}

export const FormCart: FC<FormCartProps> = ({
  isButtonDisable,
  formik,
  submittingError,
  successMessageVisible,
  handleInputChange,
}) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormItems>
        <div className="flex-grow">
          <Input
            name="phone"
            type="tel"
            formik={formik}
            placeholder="+7 (XXX) XXX-XX-XX"
            onValueChange={handleInputChange}
          />
        </div>

        <Button
          type="submit"
          disabled={isButtonDisable}
          customClassName="sm:self-end"
        >
          Отправить
        </Button>
      </FormItems>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {!formik.isValid && !!formik.submitCount && (
          <Alert color="red">Ошибка при отправке</Alert>
        )}
        {submittingError && <Alert color="red">{submittingError}</Alert>}
        {successMessageVisible && <Alert color="green">Заказ отправлен</Alert>}
      </div>
    </form>
  );
};
