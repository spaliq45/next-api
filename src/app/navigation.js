import Link from "next/link";

export default function Navigation(){
    return(
        <nav className="navbar">
            <ul>
                <li><Link href='/products'>Product List</Link></li>
            </ul>
        </nav>
    )
}