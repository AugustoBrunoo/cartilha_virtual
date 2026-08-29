import React from 'react';
import { ChannelInfoCard } from '../ChannelInfoCard';
import { GraduationCap, Briefcase, MapPin, Mail } from 'lucide-react';
import imgBruna from '../../assets/fotoAutora/img_bruna.jpeg';

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Section4() {
  return (
    <>
      {/*  SEÇÃO 4  */}
      <section className="section section--emergency" id="secao4">
        <div className="section-inner">
          <p className="section-eyebrow section-eyebrow--light">Seção 4 · Bloco 1</p>
          <h2 className="section-title section-title--light">Canais de orientação, atendimento e denúncia</h2>
          <p className="section-lead section-lead--light">Guarde estes contatos. Em caso de dúvida, ligue — não é
            preciso ter certeza para pedir orientação.</p>

          <div className="channel-grid">
            <a href="tel:100" className="channel-card channel-card--interactive">
              <span className="channel-num">100</span>
              <span className="channel-name">Direitos Humanos</span>
              <span className="channel-desc">Nacional — gratuito, 24h e anônimo</span>
            </a>
            <a href="tel:190" className="channel-card channel-card--interactive channel-card--red">
              <span className="channel-num">190</span>
              <span className="channel-name">Polícia Militar</span>
              <span className="channel-desc">Casos de emergência ou flagrante</span>
            </a>
            <ChannelInfoCard
              name="Conselho Tutelar de Campo Grande"
              description="Informações de atendimento e sobre o órgão"
              details={{
                address: 'Rua Carlos da Silva Costa, 32 – Campo Grande, Rio de Janeiro - RJ.',
                hours: 'Segunda a sexta-feira, das 9h às 18h.',
                phones: [
                  '(21) 3394-2447',
                  '(21) 2084-5931'
                ],
                mobile: '(21) 98909-1428',
                coordinates: [-22.8988, -43.5600]
              }}
            />
            <ChannelInfoCard
              name="CREAS / CRAS Campo Grande"
              description="Telefones e endereços dos equipamentos de assistência social do território"
              choices={[
                {
                  id: 'cras',
                  title: 'CRAS (Centro de Referência de Assistência Social)',
                  description: 'Focado na prevenção. Oferece serviços de proteção básica para fortalecer vínculos familiares e prevenir situações de vulnerabilidade ou risco social.',
                  details: [
                    {
                      name: 'CRAS Cecília Meireles',
                      address: 'Rua Viúva Dantas, 695 - Campo Grande',
                      hours: 'Segunda a sexta-feira, das 08h às 17h',
                      phones: '(21) 3403-5963',
                      coordinates: [-22.9028, -43.5545]
                    },
                    {
                      name: 'CRAS Aluno Marcelo Cardoso Tomé',
                      address: 'Rua do Rádio - Campo Grande',
                      hours: 'Segunda a sexta-feira, das 08h às 17h',
                      phones: '(21) 3336-6393',
                      note: 'Relatos de usuários indicam atendimentos temporários ou centrais também na Rua Dom Pedrito, 1',
                      coordinates: [-22.8914, -43.5616]
                    }
                  ]
                },
                {
                  id: 'creas',
                  title: 'CREAS (Centro Especializado de Assistência Social)',
                  description: 'Focado no acolhimento. Atende famílias e indivíduos que já sofreram violação de direitos (como violência, negligência ou abuso) oferecendo apoio especializado.',
                  details: {
                    name: 'CREAS Zilda Arns Neumann',
                    address: 'Rua Cândido Magalhães, 88 - Campo Grande',
                    hours: 'Segunda a sexta-feira, das 09h às 16h',
                    phones: '(21) 3292-4450',
                    coordinates: [-22.8830, -43.5570]
                  }
                }
              ]}
            />
            <ChannelInfoCard
              name="DPCA — Delegacia de Proteção à Criança e ao Adolescente"
              description="Informações de atendimento junto à unidade local"
              details={{
                address: 'Rua do Lavradio, 155 - Lapa / Centro, Rio de Janeiro - RJ (Próximo aos Arcos da Lapa).',
                phones: [
                  '(21) 2334-8481',
                  '(21) 2334-5634',
                  '(21) 2334-5642'
                ],
                note: 'Telefones Alternativos (DCAV): (21) 2332-4442 / (21) 2332-4330',
                coordinates: [-22.9107, -43.1828]
              }}
            />
          </div>
          <span className="copy-toast" id="copyToast">Copiado!</span>
        </div>

        <div className="section-divider"><span></span></div>

        <div className="section-inner">
          <p className="section-eyebrow section-eyebrow--light">Seção 4 · Bloco 2</p>
          <h2 className="section-title section-title--light">Sobre a autora &amp; créditos do projeto</h2>

          <div className="author-card">
            <div className="author-profile-section">
              <div className="author-image-container">
                <img src={imgBruna} alt="Bruna Chagas" className="author-image" />
              </div>
              <div className="author-header">
                <h3 className="author-name">Bruna Chagas</h3>
                <p className="author-role">Pesquisadora, Pedagoga e Defensora da Proteção Infantil</p>
              </div>
            </div>

            <div className="author-body">
              <p className="author-bio">
                Graduanda em Pedagogia pela UniSão José e Master ESEPAS (Educação Sexual, Emocional e Prevenção ao Abuso Sexual). Atua como pesquisadora no Programa Jovens Cientistas Cariocas, desenvolvendo ações de conscientização e orientação preventiva voltadas a famílias, educadores e comunidades na Nave do Conhecimento de Campo Grande.
              </p>

              {/* <div className="author-specialty-cards">
                <div className="specialty-card">
                  <div className="specialty-icon"><GraduationCap size={22} /></div>
                  <div className="specialty-text">
                    <span>Formação</span>
                    <strong>Pedagogia (UniSão José) & Master ESEPAS</strong>
                  </div>
                </div>
                <div className="specialty-card">
                  <div className="specialty-icon"><Briefcase size={22} /></div>
                  <div className="specialty-text">
                    <span>Atuação</span>
                    <strong>Jovens Cientistas Cariocas</strong>
                  </div>
                </div>
              </div> */}

              <div className="author-social-section">
                <a href="mailto:brunaschagas@email.com" className="social-btn">
                  <Mail size={18} />
                  <span>Email</span>
                </a>
                <a href="https://instagram.com/brunaschagas" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <InstagramIcon size={18} />
                  <span>Instagram</span>
                </a>
                <a href="https://linkedin.com/in/brunaschagas" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <LinkedinIcon size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <p className="disclaimer">Este Web App é um recurso educativo e informativo fruto de pesquisa científica
            e não substitui o atendimento técnico dos órgãos de saúde, assistência social e segurança pública.</p>
        </div>
      </section>

    </>
  );
}
