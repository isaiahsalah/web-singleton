import { TeamSectionBox } from './TeamSectionStyle'
import { ListTeam } from '../../../utils/Config'
import 'react-awesome-slider/dist/styles.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';






const TeamSection = () => {
    return (
        <TeamSectionBox>

            <div className="title-section-container">
                <h6 className="section-title">Nuestra Equipo</h6>
            </div>


            <Grid container padding='20px' gap='20px' style={{
                maxWidth:"1200px"
            }}>
                {
                    ListTeam.map((team, index) =>
                        <Grid key={index} display='grid' gap='20px' textAlign='left'>
                            <Grid>
                                <Typography component="h2" variant="h5">
                                    {team.title}
                                </Typography>
                                <Typography>{team.description}</Typography>
                            </Grid>

                            <Grid container spacing={2} >
                                {team.members.map((member, index) => (
                                    <Grid key={index} item xs={12} md={6} >
                                        <Paper variant="elevation" elevation={4} >
                                            <Grid
                                                container
                                                alignItems='center'
                                                gap="20px"
                                                padding='10px 20px'>
                                                <Grid
                                                    display='flex'
                                                    justifyContent='center'
                                                    alignItems='center'
                                                    width='80px'
                                                    height='80px'
                                                >
                                                    <Avatar
                                                        style={{
                                                            width: '100%',
                                                            height: '100%'
                                                        }}
                                                        alt="Remy Sharp"
                                                        src={member.image}
                                                    />

                                                </Grid>
                                                <Grid style={{ textAlign: 'left' }}>
                                                    <Typography component="h3" variant="h6">
                                                        {member.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {member.flag}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {member.location}
                                                    </Typography>
                                                    <Grid 
                                                    container 
                                                    gap='10px' >
                                                        {member.social.map(social =>
                                                            <a href={social.url} target='_blank'>                                                            
                                                            <h6><social.icon /></h6>
                                                            </a>
                                                        )

                                                        }
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    )
                }

            </Grid>
        </TeamSectionBox>
    );
}

export default TeamSection