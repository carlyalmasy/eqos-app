
export default function Footer() {
  const today = new Date();

  return (
    <>
        <p>
            Copyright &copy; 2023 - {today.getFullYear()} EQOS
        </p>
    </>
  )
}