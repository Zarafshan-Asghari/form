import check from '../../../public/images/icon-success-check.svg'


export default function Message() {
  return (
    <div className=" capitalize p-4 rounded-lg bg-gray-dark text-white flex flex-col gap-1">
      <span className="flex items-center gap-1">
        <img src={check} alt="" className="size-4" /> message sent!
      </span>
      <p className="text-xs font-thin">
        thanks for completing the form we'll be in touch soon.
      </p>
    </div>
  );
}
