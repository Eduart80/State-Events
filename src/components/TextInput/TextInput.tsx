import React from 'react';
import type { TextInputProps } from '../../types';
 
export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = 'Start typing...',
  initialValue = ''
}) => {
  return (
    <div className="w-full">
      <textarea
        className="w-full p-4 border border-gray-5
        00 rounded-lg focus:ring-2 focus:ring-blue-3
        00 focus:border-blue-500"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)}
        rows={6}
      />
    </div>
  );
};