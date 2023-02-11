import PropTypes from "prop-types";

export default function InputText({ label, id, type, register, children }) {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={label}
        className="rounded border-slate-100 py-2 pl-2 text-lg transition-transform focus:-translate-y-1 focus:py-4"
        // Register this input by its id with React Hook Form
        {...register(id)}
      />
      {children}
    </div>
  );
}

InputText.defaultProps = {
  register: () => {},
  type: "text",
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  register: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
};
