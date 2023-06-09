# SelectPickerComponent
This is a custom select picker component using Bootstrap Select plugin. It initializes plugin on mount, handles onChange and toggle events. Optional feature to enhance toggle behavior is available.

This is a React functional component that wraps the Snap Appointments Bootstrap Select Picker. It takes several props:

id: a string ID for the select element, defaults to a random ID if not provided.

options: an array of option objects with value and label properties.

onChange: a function that will be called when the selected options change.

defaultValue: an array of default values for the select element.

children: any child elements to be rendered within the select element.

className: a string of CSS classes to apply to the select element.

enhanceToggle: a boolean flag that determines whether the select element's toggle behavior will be enhanced.

title: a string to use as the select element's title attribute.

disabled: a boolean flag that determines whether the select element is disabled.

multiple: a boolean flag that determines whether the select element allows multiple selections

The component uses React hooks to manage the select element's lifecycle, including initializing the Bootstrap Select Picker, setting the default value, and cleaning up the plugin on unmount.

The handleKeyDown function is used to toggle the select element on Enter or Space keypress if it is not already open, and to prevent default behavior if the select element is already open and the target element is not an input.

The component returns a select element with the provided props and options rendered as option elements. The selected options are managed by the Bootstrap Select Picker plugin.


When working with the SelectPicker component, it is important to read the documentation for the underlying bootstrap-select library that is being used. This will provide you with information on all the available options, events, and methods that you can use with the select element. The bootstrap-select library provides a rich set of features and options for customizing the behavior and appearance of your select elements, and understanding how to use these options can be very helpful when building complex UIs. You can find the documentation for bootstrap-select at https://developer.snapappointments.com/bootstrap-select/.

To use the React Functional Component, you can follow these steps:

Import the component: Import the component into your React application using the following code:

import SelectPicker from './SelectPicker';
Note: Make sure to update the path to match the location of the SelectPicker.js file in your project.

Render the component: Render the SelectPicker component within your React application by passing in the required props. For example:

<SelectPicker
  id="example-select"
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]}
  onChange={(value) => console.log('Selected:', value)}
  defaultValue="option2"
/>
