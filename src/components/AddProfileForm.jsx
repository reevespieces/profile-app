import { useReducer, useRef, useLayoutEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/profileform.module.css"
import formReducer from "../reducers/formReducer";


const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const initialState = {
    values: {
        name: "",
        title: "",
        email: "",
        bio: "",
        image: null,
    },
    error: "",
    isSubmitting: false,
    success: "",
};

const AddProfileForm = ({ onAddProfile }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const { values, error, isSubmitting, success } = state;

    const { name, title, email, bio, image } = values;
    const navigate = useNavigate();

    const fieldRef = useRef(null);
    useLayoutEffect(() => {
        fieldRef.current?.focus();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "image") {
            const file = event.target.files[0]
            dispatch({ type: "SET_IMG", payload: file });
        } else {
            dispatch({ type: "SET_VALUES", payload: { name, value } });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: "START_SUBMITTING" });
        try {
            if (
                !stripTags(trimCollapse(name)) ||
                !stripTags(trimCollapse(title)) ||
                !trimCollapse(bio) ||
                !stripTags(trimCollapse(email))
            ) {
                dispatch("EMPTY_FIELD");
                return;
            };
            const cleanedData = {
                id: Date.now(),
                name: stripTags(trimCollapse(name)),
                title: stripTags(trimCollapse(title)),
                email: stripTags(trimCollapse(email)),
                bio: trimCollapse(bio),
                image: URL.createObjectURL(image)
            }
            //submit the data
            onAddProfile(cleanedData);
            dispatch({type: "ON_SUBMIT"});
            setTimeout(() => {
                dispatch({type: "SUBMIT_SUCCESS"});
                navigate("/");
            }, 1000);
        } catch (error) {
            dispatch({type: "SYSTEM_ERROR", payload: error.message});
        } finally {
            dispatch({type: "AFTER_SUBMIT"})
        }
    };

    const disabled = 
        !stripTags(trimCollapse(name)) || 
        !stripTags(trimCollapse(title)) || 
        !trimCollapse(bio) || 
        !stripTags(trimCollapse(email)) || 
        isSubmitting || 
        error !== "";

    return (
        <form onSubmit={handleSubmit} className={styles.form}>

            <label htmlFor="name" className={styles.label}>Name</label>
            <input
            ref={fieldRef}
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={handleChange}
                className={styles.input}
            />

            <label htmlFor="title" className={styles.label}>Title</label>
            <input
                id="title"
                name="title"
                type="text"
                required
                value={title}
                onChange={handleChange}
                className={styles.input}
            />

            <label htmlFor="email" className={styles.label}>Email</label>
            <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={handleChange}
                className={styles.input}
            />

            <label htmlFor="bio" className={styles.label}>Add description</label>
            <textarea
                id="bio"
                name="bio"
                required
                value={bio}
                maxLength={200}
                onChange={handleChange}
                className={styles.textarea}
            />

            <label htmlFor="image" className={styles.label}>Upload an image</label>
            <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className={styles.fileInput}
            />

            <button disabled={disabled} className={styles.button}>
                Submit
            </button>

            {error && <p className={styles.error}>{error}</p>}
            {success && <p className={styles.success}>{success}</p>}

        </form>

    );

};

export default AddProfileForm;