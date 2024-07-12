const Competitor = require('../../models/CompetitorModel');
const { generateWebsiteTraffic, generateTopPages } = require('../config/helper');

exports.createCompetitor = async (req, res) => {
  
  try {
    const { name, type, location } = req.body;
    const websiteTraffic = generateWebsiteTraffic();
    const topPages = generateTopPages();
    console.log(websiteTraffic, topPages)

    const competitor = await Competitor.create({ name, type, location, website_traffic: websiteTraffic, top_pages: topPages });

    res.status(201).json({ 
        status: 'success',
        message: "Competitor created",
        data: competitor
     });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.getCompetitor = async (req, res) => {
  
  try {
    const { id } = req.params;
    const competitor = await Competitor.findByPk(id);

    if(!competitor)
    {
      return res.status(404).json({ status: "error", message: 'Competitor not found' });
    }
   
    return res.status(200).json({
        status: 'success',
        message: 'Data retrieved successfully',
        data: competitor
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
