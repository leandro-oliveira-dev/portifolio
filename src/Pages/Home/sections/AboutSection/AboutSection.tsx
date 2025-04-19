import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Typescript", "Nodejs", "KoaJS", "Git", "MongoDb", "Postman", "Express ", "AWS", "Fastify ", "Prisma", "Moongoose", "Postgress"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">1+ years</Typography>
                                <Typography textAlign="center">Backend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">5+ years</Typography>
                                <Typography textAlign="center">Analista de Inventário</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Etec</Typography>
                                <Typography textAlign="center">Desenvolvimento de Sistemas</Typography>
                            </StyledCard>
                        </AnimationComponent>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Univesp</Typography>
                                <Typography textAlign="center">Engenharia da Computação</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        💻 Desenvolvedor Backend com experiência prática em construção de APIs robustas, escaláveis e bem estruturadas. Trabalho diariamente com tecnologias modernas do ecossistema JavaScript/TypeScript, com foco em performance, segurança e boas práticas de desenvolvimento.

                        Tecnologias com as quais atuo:

                        Linguagem & Runtime: TypeScript, Node.js

                        Frameworks: KoaJS, Express, Fastify

                        Banco de Dados: MongoDB (Mongoose), PostgreSQL (Prisma)

                        DevOps & Cloud: AWS

                        Ferramentas: Git, Postman

                        Testes & Qualidade: Validação de rotas, testes manuais e foco em estrutura de código limpo

                        Atualmente, atuo como desenvolvedor backend, contribuindo com soluções reais em ambiente de produção. Sempre buscando evoluir, aprender novas abordagens e entregar valor através da tecnologia.

                        Vamos trocar uma ideia? Me chama por aqui!
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
