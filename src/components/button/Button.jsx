export default function Button({text='button'}){
    return <button className="bg-green-medium hover:opacity-90 transition duration-300 font-karla text-white px-6 py-1 rounded-sm w-full capitalize cursor-pointer  md:text-sm text-xs ">{text}</button>
}
