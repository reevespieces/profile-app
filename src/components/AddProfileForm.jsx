import { useState } from "react"
import styles from "../styles/profileform.module.css"

const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");

const AddProfileForm = ({ onAddProfile }) => {

    const [values, setValues] = useState({ name: "", title: "", email: "", bio: "", image: null })
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)

    const { name, title, email, bio, image } = values

    const handleChange = (event) => {
        const { name, value } = event.target
        if (name === "image") {
            const file = event.target.files[0]
            if (file && file.size < 1024 * 1024) {
                setValues(pre => ({ ...pre, image: file }))
                setError("")
            } else {
                setError("Image should be less than 1 MB")
                setValues(pre => ({ ...pre, image: null }))
            }
        }else{
            setValues(pre => ({ ...pre, [name]: value }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true)
        try {
            if (!stripTags(trimCollapse(name)) || !stripTags(trimCollapse(title)) || !trimCollapse(bio) || !stripTags(trimCollapse(email))) {
                setError("Please fill in name, title, email, and description")
                return;
            }
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

            setValues({ name: "", title: "", email: "", bio: "", image: null })
            setError("")
            setSuccess("Form is submitted successfully")
            setTimeout(() => {
                setSuccess("")
            }, 1000)

        } catch (error) {
            setError(error.message)
        } finally {
            setIsSubmitting(false)
        }

    }

    const disabled = !stripTags(trimCollapse(name)) || !stripTags(trimCollapse(title)) || !trimCollapse(bio) || !stripTags(trimCollapse(email)) || isSubmitting || error !=="";

    return (
        <form onSubmit={handleSubmit} className={styles.form}>

  <label htmlFor="name" className={styles.label}>Name</label>
  <input
    id="name"
    name="name"
    required
    value={name}
    onChange={handleChange}
    className={styles.input}
  />

  <label htmlFor="title" className={styles.label}>Title</label>
  <input
    id="title"
    name="title"
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

    )

}

export default AddProfileForm;