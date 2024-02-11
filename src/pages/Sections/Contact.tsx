import { useState } from "react";
import FormInput from "../../components/FormInput";
import SectionHeader from "../../components/SectionHeader";
import { contact_us } from "../../assets";

interface Form {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section id="contact" className="flex flex-col w-full ">
      <SectionHeader title="Get In Touch" className="xl:mr-auto text-center " />
      <p className="mb-10 mt-5 w-full text-xl">
        We'd love to hear from you! Whether you have a project in mind, need
        expert advice, or just want to say hello, our team is ready to listen.
        Reach out to us, and let's create something amazing together.
      </p>

      <div className="flex">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col 
              xl:basis-3/4 gap-4 
              xl:max-w-[40%] w-full
            ">
          {Object.keys(form).map((key) => {
            const formKey = key as keyof Form;
            return (
              <FormInput
                key={key}
                label={formKey.charAt(0).toUpperCase() + formKey.slice(1)}
                type={formKey === "email" ? "email" : "text"}
                name={formKey}
                value={form[formKey]}
                onChange={handleChange}
                required={formKey !== "phone"}
                isMessage={formKey === "message"}
              />
            );
          })}
          <button
            type="submit"
            className="bg-primary md:py-4 py-2 text-white text-lg rounded-full ">
            Submit
          </button>
        </form>

        <div
          className="xl:flex items-center  
            xl:basis-3/4 hidden flex-col gap-4
          ">
          <img
            src={contact_us}
            alt="contact us"
            className="rounded-xl object-cover
          "
          />

          <p className="text-primary gap-2">
            Or reach out to us at{" "}
            <a href="mailto:info@techiden.com" className="text-secondary">
              info@techiden.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
