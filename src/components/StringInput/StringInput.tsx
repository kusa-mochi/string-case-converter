import { ChangeEvent, useState } from 'react';
import styles from '@/components/StringInput/StringInput.module.css';

export default function StringInput() {
    const [inputValue, setInputValue] = useState<string>("");

    function OnTextareaChanged(e: ChangeEvent<HTMLTextAreaElement>) {
        console.log("textarea changed.");
        console.log(e)
    }

    return (
        <>
            <div className={styles.container}>
                <textarea className={styles.textarea} value={inputValue} onChange={OnTextareaChanged}></textarea>
            </div>
        </>
    )
}
