"use client";

import { footer_icon } from "../_data/photos";
import Image from "next/image";
import Link from "next/link";

import styles from "../_styling/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <Link href={"/"}>
        <Image
          src={footer_icon.src}
          alt={footer_icon.alt}
          height={footer_icon.height}
          width={footer_icon.width}
          className={styles.footer_icon}
        />
      </Link>
      <p>&copy; {new Date().getFullYear()} Marf Inc. All rights reserved.</p>
    </footer>
  );
}
