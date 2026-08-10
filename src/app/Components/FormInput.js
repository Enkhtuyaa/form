export const FormInput = (props) => {
    const {label, value, onChange, name, error} =props;

     return (
    <div>
      <p className="font-semibold text-sm">
       {label}
        <span className="text-red-600 text-sm">*</span>
      </p>
      <input
        className={`w-104 h-11 rounded-lg border ${error ? "border-red-400" : "border-blue-400"}`}
        placeholder= {label}
        onChange={onChange}
        name= {name}
        value={value}
      />
      <span className="text-red-600 text-sm">
        {" "}
        {error}
      </span>
    </div>
  );
    }
//    label
//    value
//    onchange
//    name 
//    error
    