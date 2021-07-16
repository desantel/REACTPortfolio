import '../../styles/Index.css';
import Footer from './Footer';

export default function Contact() {
    return (
        <div>
            <h1>
                Contact Page
            </h1>
            <div class="container">
                <div class="row">
                    <footer class="col-12">
                        <div class="row">
                            <h2 class="col-12" id="contact">Contact Information</h2>
                            <ul class="">
                                <li class="" id="">Telephone: ###-###-####</li>
                                <li class="" id="">Email: elizabeth.desantis90@gmail.com</li>
                                <li class="" id=""><a href="https://github.com/desantel"
                                    target="_blank">Github</a></li>
                                <li class="" id=""><a
                                    href="https://www.linkedin.com/in/elizabeth-desantis-55941399/"
                                    target="_blank">LinkedIn</a></li>
                                <li class="" id=""><a href="../assets/Elizabeth De Santis Resume.pdf"
                                    target="_blank" download>Resume</a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
            <Footer />
        </div>
    );
}
