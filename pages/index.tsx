import Game from '../components/game';

export default function Home() {
  return (
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
    }}>
      <Game />
    </div>
  )
}
