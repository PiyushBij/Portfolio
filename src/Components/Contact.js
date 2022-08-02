import './Contact.css';
import Nav2Bar from "./Nav2Bar.js";

function Contact() {
    return (
<>
    <Nav2Bar />
{/* <h1>Contact</h1> */}
<div className="contact-co1">
    <div className="co1-container">
        <h1>Let's Talk...</h1>
        <h3>If you have any enquiry or even a coffee.</h3>
        <form className="co1-form" action="action.php">
            <label htmlFor="inp1">name</label>
            <input className="co1-inputs" id="inp1" type="text"/><br/>
            <label htmlFor="inp2">name2</label>
            <input className="co1-inputs" id="inp2" type="text"/><br/>
            <label htmlFor="inp3">email</label>
            <input className="co1-inputs" id="inp3" type="text"/>
        </form>
    </div>
</div>
</>
    );
}

export default Contact;