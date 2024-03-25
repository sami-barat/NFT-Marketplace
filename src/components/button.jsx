import "./styles/button.css"

// eslint-disable-next-line react/prop-types
const Button = ({color, bcolor, text, uppercase, p, m, fz, fw, icon, brs, gap, b, ff, h, w }) => {
  return (
    <button style={{
      gap: gap ? gap : "15px",
      display: "flex",
      justifyContent: "center",
      padding: p,
      margin: m,
      fontSize: fz,
      fontWeight: fw,
      border: b,
      borderRadius: brs,
      color: color,
      backgroundColor: bcolor,
      textTransform: uppercase ? "uppercase" : "none",
      cursor: "pointer",
      fontFamily: ff,
      height: h,
      width: w
    }}
    >
      {icon}
      {text}
    </button>
  )
}

export { Button };