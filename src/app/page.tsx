import styles from "./page.module.css";
import Card from "@/components/Card";

async function getData() {
  const res = await fetch("https://ns3x9s.csb.app/mock-api.json");

  // handling error
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <div className={styles.page}>
      <Card data={data}/>
    </div>
  );
}
