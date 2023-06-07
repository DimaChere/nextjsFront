import styles from "../../styles/page.module.css";

export default function BContacts() {
  return (
    <div className="flex flex-col h-full justify-center items-center mt-10 mb-10">
      <div className="w-[90%] border-2 rounded-2xl border-gray-300 border-opacity-50 px-7 py-7 mb-7">
        <h2 className={styles.headline}>
          Would like to become a member, please contact us
        </h2>
        <a href="/" className="underline">
          support@notab.com
        </a>
      </div>
      <div className="w-[90%] border-2 rounded-2xl border-gray-300 border-opacity-50 px-7 py-7">
        <h2 className={styles.headline}>Already a partner?</h2>
        <a href="/" className="underline">
          Login
        </a>
      </div>
    </div>
  );
}
