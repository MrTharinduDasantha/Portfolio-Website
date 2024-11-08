import styles from "./ContactStyles.module.css"
import { toast } from "react-toastify"

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const WEB3FORM_API_KEY = import.meta.env.VITE_WEB3FORM_API_KEY
    
        formData.append("access_key", WEB3FORM_API_KEY)
    
        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json())
    
        if (res.success) {
            toast.success(res.message)
            event.target.reset()
        }
      }
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form onSubmit={onSubmit}>
            <div className="formGroup">
                <label htmlFor="name" hidden>Name</label>
                <input type="text" name="name" id="name" placeholder="Name" required />
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>Email</label>
                <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>Message</label>
                <textarea name="message" id="message" placeholder="Message" required></textarea>
            </div>
            <input type="submit" className="hover btn" value="Submit" />
        </form>
    </section>
  )
}

export default Contact