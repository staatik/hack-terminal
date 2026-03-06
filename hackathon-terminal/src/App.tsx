import { Route, Switch } from 'wouter'
import { Toaster } from 'sonner'
import Home from './pages/Home'
import LLMEducation from './pages/LLMEducation'
import DigitalDiscipline from './pages/DigitalDiscipline'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/llm-education" component={LLMEducation} />
        <Route path="/digital-discipline" component={DigitalDiscipline} />
        <Route component={NotFound} />
      </Switch>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#001a00',
            border: '1px solid #004d1a',
            color: '#00ff41',
            fontFamily: 'Share Tech Mono, monospace',
          },
        }}
      />
    </>
  )
}
