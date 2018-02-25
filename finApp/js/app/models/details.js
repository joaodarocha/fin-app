/**
 * Details Model
 */

define(function() {

    function CompanyDetails(
        ticker,
        name,
        businessAddress,
        hqState,
        hqCountry,
        ceo,
        sector,
        industryGroup,
        industryCategory,
        shortDescription) {

        this.ticker = ticker;
        this.name = name;
        this.businessAddress = businessAddress;
        this.hqState = hqState;
        this.hqCountry = hqCountry;
        this.ceo = ceo;
        this.sector = sector;
        this.industryGroup = industryGroup;
        this.industryCategory = industryCategory;
        this.shortDescription = shortDescription;
    }

    return CompanyDetails;
});  
