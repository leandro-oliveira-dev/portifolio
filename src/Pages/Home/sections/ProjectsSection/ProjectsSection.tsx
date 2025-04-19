import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import bibliotecaImg from '/src/assets/images/biblioteca_etec_image.png';
import vetImg from '/src/assets/images/vet_pageInit.png';


const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Biblioteca Etec",
            subtitle: "Jan 2024 - Jun 2024",
            srcImg: bibliotecaImg,
            description: "Sistema de administração da biblioteca da Etec da minha cidade, com funcionalidades como: cadastro de livros, armazenamento no acervo, cadastro de alunos, aluguel de livros, autenticação de alunos e administradores, histórico de movimentações, envio de e-mails para alunos e acesso a bibliotecas online.",
            technologies: "Technologies: Typescript, nodejs,Docker, Prisma, Postgress, React",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/leandro-oliveira-dev/biblioteca-server/",
        },
        {
            title: "Clinica Veterinária",
            subtitle: "Jan 2025 - Em andamento",
            srcImg: vetImg,
            description: "A ideia deste sistema é cadastrar clientes e pets para realizar o controle de agendamentos com os veterinários disponíveis no momento, com envio automático de e-mails para os clientes. Futuramente, haverá também uma loja para pets, onde o cliente poderá adicionar itens ao carrinho e finalizar a compra.",
            technologies: "Technologies: Typescript, nodejs,Docker, Prisma, Postgress, React",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/leandro-oliveira-dev/vet-admin-server",
        }

    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
