import { TeamSectionBox } from './TeamSectionStyle'
import { Team } from '../../../utils/Classes'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import teamImage from "../../../assets/images/team.jpg"

interface TeamProps {
    team: Team[]
}

const TeamSection = (props: TeamProps) => {
    return (
        <TeamSectionBox id="team">
            <img id='team-back-image' src={teamImage} alt='' />
            <div className="title-section-container">
                <div className="h6 section-title">Nuestra Equipo</div>
            </div>
            <Grid display='grid' padding='20px' gap='40px' style={{
                maxWidth: "1200px"
            }}>
                {
                    props.team.map((team, index) =>
                        <Grid key={index} display='grid' gap='20px' textAlign='left'>
                            <Grid className='team-title'>
                                <Typography component="h2" variant="h5">
                                    {team.area}
                                </Typography>
                                <Typography>{team.description}</Typography>
                            </Grid>
                            <Grid container spacing={2} >
                                {team.members.map((member, index) => (
                                    <Grid key={index} item xs={12} sm={6} md={4}   >
                                        <Paper 
                                        className='team-member' 
                                        variant="elevation" 
                                        elevation={4} 
                                        style={{
                                            height:"100%",
                                            borderRadius:"10px"
                                    }}
                                        
                                        >
                                            <Grid
                                                container
                                                alignItems='center'
                                                display="flex"
                                                gap="20px"
                                                flexWrap="nowrap"
                                                padding='10px 20px'
                                                height="100%"
                                                
                                            >
                                                <Grid
                                                    display='flex'
                                                    justifyContent='center'
                                                    alignItems='center'
                                                    minWidth='70px'
                                                    minHeight='70px'
                                                    width='70px'
                                                    height='70px'
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
                                                        {member.position}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {member.description}
                                                    </Typography>
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