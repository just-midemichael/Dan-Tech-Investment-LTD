import React, { useEffect, useRef, useState } from "react";
import {
  ButtonBox,
  CloseIconBox,
  Form,
  FormContentBox,
  InputBox,
  Input,
  BoxWrapper,
  EmailInput,
  Check,
  Span,
  Label,
} from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { appStyle } from "@/db/appStyle";
import { toast } from "react-toastify";
import { ButtonComponent } from "@/component/global/button/style";
import { productList } from "@/db/products";

interface InvestmentFormProps {
  onClose: () => void;
  productName: string;
}
export const InvestmentForm = ({
  onClose,
  productName,
}: InvestmentFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    interestRate: "",
  });

  const [investmentAmountValue, setInvestmentAmountValue] = useState("");

  useEffect(() => {
    const defaultProduct =
      productList.find(
        (product) => product.name.toLocaleLowerCase() === productName
      ) || productList[0];

    setSelectedProduct({
      name: defaultProduct.name,
      interestRate: defaultProduct.roi.toString(),
    });
  }, []);

  // Function to format input as Naira currency
  const formatToNaira = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (!numericValue) return "";
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(parseInt(numericValue, 10));
  };

  // State to manage the formatted investment amount
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setInvestmentAmountValue(formatToNaira(rawValue));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeO5FNWFsvBVD9-TIjcsyNHEqPmJeeOmr1JaU4m7JFain9AIw/formResponse?usp=pp_url",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // prevents CORS error but gives no response
        }
      );

      toast.success("Application submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      onClose(); // Close the modal
      formRef.current?.reset(); // Optional: clear form fields
    } catch (error) {
      toast.error("Submission failed. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <CloseIconBox>
        <CloseIcon
          fontSize="inherit"
          style={{ color: appStyle.headerTitleColor, cursor: "pointer" }}
          onClick={onClose}
          titleAccess="Close form"
        />
      </CloseIconBox>
      <FormContentBox>
        <BoxWrapper>
          <InputBox>
            <Input
              type="text"
              name="entry.2074067747"
              placeholder="First Name"
              aria-label="First Name"
              required
              autoComplete="off"
            />
          </InputBox>

          <InputBox>
            <Input
              type="text"
              name="entry.541323548"
              placeholder="Last Name"
              aria-label="Last Name"
              required
              autoComplete="off"
            />
          </InputBox>
        </BoxWrapper>

        <BoxWrapper>
          <InputBox>
            <Input
              type="text"
              name="entry.2111760065"
              placeholder="Middle Name"
              aria-label="Middle Name"
              autoComplete="off"
            />
          </InputBox>

          <InputBox>
            <Input
              type="phone"
              name="entry.335945726"
              placeholder="Phone Number"
              aria-label="Phone Number"
              required
              autoComplete="tel"
              inputMode="numeric" // ✅ Shows numeric keypad on mobile
              pattern="^(?:\+234|0)[789][01]\d{8}$"
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity(
                  "Please enter a valid Nigerian phone number (e.g. 08012345678 or +2348012345678)"
                )
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
          </InputBox>
        </BoxWrapper>

        <BoxWrapper>
          <InputBox>
            <EmailInput
              type="email"
              name="entry.250187275"
              placeholder="Email Address"
              aria-label="Email Address"
              required
              autoComplete="off"
            />
          </InputBox>
        </BoxWrapper>

        <BoxWrapper>
          <InputBox>
            <Input
              type="text"
              name="entry.989949166"
              value={selectedProduct.name}
              placeholder="Product Name"
              aria-label="Product Name"
              required
              readOnly
              autoComplete="off"
            />
          </InputBox>

          <InputBox>
            <Input
              type="text"
              name="entry.339880958"
              value={`${selectedProduct.interestRate || ""}%`}
              placeholder="Interest Rate (%)"
              aria-label="Interest Rate"
              required
              readOnly
              autoComplete="off"
            />
          </InputBox>
        </BoxWrapper>

        <BoxWrapper>
          <InputBox>
            <Input
              type="text"
              name="entry.862874916"
              placeholder="Investment Amount (₦)"
              aria-label="Investment Amount"
              required
              autoComplete="off"
              value={investmentAmountValue}
              onChange={handleAmountChange}
              inputMode="numeric"
            />
          </InputBox>
        </BoxWrapper>

        <BoxWrapper>
          <Label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Check
              type="checkbox"
              name="entry.1038723034"
              required
              value="True"
              aria-label="Agree to terms"
            />
            <Span>
              I hereby acknowledge that I have read and agreed with&nbsp;
              <a href="/terms-of-use" target="_blank">
                the terms and conditions
              </a>
              .
            </Span>
          </Label>
        </BoxWrapper>
      </FormContentBox>
      <ButtonBox>
        <ButtonComponent
          style={{
            minWidth: "100%",
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "1.1rem",
            fontWeight: 400,
          }}
          type="submit"
          id="investment-submit-button"
        >
          Submit Application
        </ButtonComponent>
      </ButtonBox>
    </Form>
  );
};
