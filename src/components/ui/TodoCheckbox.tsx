import React from "react";

type TodoCheckboxProps = {
    id: number;
    name: string;
    checked: boolean;
    onChange: (id: number) => void;
    onDelete: (id: number) => void;
};

const TodoCheckbox: React.FC<TodoCheckboxProps> = ({
    id,
    name,
    checked,
    onChange,
    onDelete,
}) => {
    const inputId = `todo-${id}`;

    return (
        <li className="flex items-center justify-between">
            <label htmlFor={inputId} className="flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    id={inputId}
                    name="todo"
                    checked={checked}
                    onChange={() => onChange(id)}
                    className="hidden"
                />
                <div
                    className={`min-w-[18px] min-h-[18px] border rounded-sm transition-colors p-0.5 duration-200 ${checked ? "bg-primary-600 border-primary-600" : "border-primary-900"
                        }`}
                >
                    {checked && (
                        <svg
                            className="size-[12px]"
                            viewBox="0 0 13 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_4_1446)">
                                <path
                                    d="M12.3422 3.06507C12.1835 2.90638 11.9262 2.90638 11.7675 3.06507L5.16885 9.66367C5.01016 9.82236 4.75288 9.82236 4.59419 9.66368L1.42296 6.4925C1.26427 6.33381 1.00699 6.33381 0.848302 6.4925L0.787335 6.55347C0.628645 6.71216 0.628645 6.96945 0.787336 7.12813L4.59419 10.9349C4.75288 11.0936 5.01016 11.0936 5.16885 10.9349L12.4031 3.7007C12.5618 3.54202 12.5618 3.28473 12.4031 3.12604L12.3422 3.06507Z"
                                    fill="#F5F7F9"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_4_1446">
                                    <rect
                                        width="12.1905"
                                        height="12.1905"
                                        fill="white"
                                        transform="translate(0.5 0.904755)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    )}
                </div>
                <span
                    className={`select-none ${checked ? "line-through text-primary-300" : "text-primary-900"
                        }`}
                >
                    {name}
                </span>
            </label>
            <button
                type="button"
                onClick={() => onDelete(id)}
                className="cursor-pointer"
                aria-label={`Delete ${name}`}
            >
                <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.4997 5L14.8323 15.0107C14.7738 15.8875 14.7446 16.3259 14.5553 16.6583C14.3885 16.951 14.137 17.1863 13.8339 17.3332C13.4897 17.5 13.0503 17.5 12.1715 17.5H8.82782C7.94907 17.5 7.50969 17.5 7.16542 17.3332C6.86232 17.1863 6.61083 16.951 6.44411 16.6583C6.25473 16.3259 6.22551 15.8875 6.16706 15.0107L5.49967 5M3.83301 5H17.1663M13.833 5L13.6075 4.32339C13.3889 3.66771 13.2796 3.33987 13.0769 3.09748C12.8979 2.88344 12.6681 2.71777 12.4084 2.61565C12.1143 2.5 11.7688 2.5 11.0777 2.5H9.92167C9.23051 2.5 8.88501 2.5 8.59093 2.61565C8.33127 2.71777 8.10141 2.88344 7.92242 3.09748C7.71972 3.33987 7.61044 3.66771 7.39187 4.32339L7.16634 5M12.1663 8.33333V14.1667M8.83301 8.33333V14.1667"
                        stroke="#1D3557"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </li>
    );
};

export default TodoCheckbox;