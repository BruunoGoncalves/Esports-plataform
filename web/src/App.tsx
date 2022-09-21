import  './styles/main.css';
import logoImg from '../assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useState, useEffect} from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/Input';

interface Game{
  id:string;
  title:string;
  bannerUrl: string;
  _count: {
    ads:number;
  }


}
function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20' >

      <img src={logoImg} className = 'max-w-[300px]' alt="Logo max-w-[300px]" />
      <h1 className='text-60 text-white font-black mt-10'>Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
            key={game.id}
              bannerURL={game.bannerUrl} 
              title={game.title} 
              adsCount={game._count.ads} />
          )
        })
      }
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' >
            <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg'>
              <Dialog.Title className='text-2xl text-white font-black'>Publique um anúncio</Dialog.Title>
              
                <form className='mt-8 flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="game" className='font-semibold'>Qual o game?</label>
                    <Input id="game" placeholder='Selecione o game que deseja jogar' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='font-semibold'>Seu nome ou nickname</label>
                    <Input id="name" placeholder='Como te chamam dentro do game' />
                  </div>
                  <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="yearsPlaying" className='font-semibold'>Joga a quantos anos?</label>
                      <Input id='yearsPlaying' type='number' placeholder='Tudo bem ser zero'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor="discord" className='font-semibold'>Qual seu Discord?</label>
                      <Input id='discord' type='text' placeholder='usuario#000' />
                    </div>
                  </div>
                  <div className='flex gap-6'>
                    <div className=' flex flex-col gap-2'>
                      <label htmlFor="weekDays" className='font-semibold'>Quando costuma jogar?</label>
                      <div className='flex gap-1'>
                        <button 
                          title='domingo'
                          className='w-8 h-8 rounded bg-zinc-900'
                          >
                            d
                        </button>
                        <button 
                          title='segunda'
                          className='w-8 h-8 rounded bg-zinc-900'
                          >
                            s
                        </button>
                        <button 
                          title='terça'
                          className='w-8 h-8 rounded bg-zinc-900'
                          >
                            t
                        </button >
                        <button 
                          title='quarta'
                          className='w-8 h-8 rounded bg-zinc-900'
                          >
                            q
                        </button >
                        <button 
                          title='quinta'
                          className='w-8 h-8 rounded bg-zinc-900'
                          >
                            q
                        </button >
                        <button 
                          title='sexta'
                          className='w-8 h-8 rounded bg-zinc-900'
                          >
                            s
                        </button >
                        <button 
                          title='sábado'
                          className='w-8 h-8 rounded bg-zinc-900'
                          >
                            s
                        </button>
                      </div>
                    </div>
                    <div className=' flex flex-col gap-2 flex-1'>
                      <label htmlFor="hourStart" className='font-semibold'>Qual horário?</label>
                      <div className='grid grid-cols-2 gap-2'>
                        <Input id='hourStart' type='time' placeholder='de'/>
                        <Input id='hourEnd' type='time' placeholder='até' />
                      </div>
                    </div>
                  </div>

                  <div className='mt-2 flex gap-2 text-sm '>
                    <Input type="checkbox" name="" id="" />
                    Costumo me comunicar ao chat de voz
                  </div>

                  <footer className='mt-4 flex justify-end gap-4'>
                    <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
                    <button className=' flex items-center gap-3 bg-violet-500 px-5 h-12 rounded-md font-semibold hover:bg-violet-600' type="submit">
                      <GameController size={24}/>
                      Encontrar Duo
                    </button>
                  </footer>
                </form>

            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
