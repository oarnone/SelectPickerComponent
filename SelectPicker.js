const SelectPicker = ({
    id = id || `select-${crypto.randomUUID()}`,
    options,
    onChange,
    defaultValue = [],
    children,
    className,
    enhaceToggle,
    title,
    disabled,
    multiple,
    ...attributes
  }) => {
    const selectRef = React.useRef(null);

    const handleKeyDown = (event, $select) => {
      if (
        (event.key === "Enter" || event.key === " ") &&
        !event.currentTarget.classList.contains("show")
      ) {
        $select.selectpicker("toggle");
      }
      if(event.currentTarget.classList.contains("show") && event.target.tagName !== "INPUT") 		event.preventDefault();
    };

    React.useEffect(() => {
      const $select = $(selectRef.current);

      $select.selectpicker();

      $select.selectpicker("val", defaultValue);

      $select.on(
        "changed.bs.select",
        (event, clickedIndex, isSelected, previousValue) => {
          onChange(event, clickedIndex, isSelected, previousValue);
        }
      );

      if(enhaceToggle!=="undefined") $select.parent().on("keydown", (event) => handleKeyDown(event, $select));

      return () => {
        $select.off("changed.bs.select");
        if(enhaceToggle) $select.parent().off("keydown", handleKeyDown);
        $select.selectpicker("destroy");
      };
    }, []);

    return (
      <select
        className={className}
        title={title}
        ref={selectRef}
        disabled={disabled}
        multiple={multiple}
        id={id}
        {...attributes}
      >
        {options.map((option, idx) => (
          <option
            id={`option-${id}-${idx}`}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  export default SelectPicker;
