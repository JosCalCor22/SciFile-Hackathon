# *SciFile*

## What is SciFile?

Represents a revolutionary innovation in the field of scientific publishing. By monetizing and decentralizing the validation of scientific articles, SciFiles not only promotes a robust data economy but also ensures secure and open access to information for the global scientific community. This platform eliminates censorship barriers, allowing knowledge to flow freely and reach researchers from all corners of the planet. Furthermore, by enhancing the article review process through an incentivized system, SciFiles ensures that reviews are more thorough and frequent, thereby increasing the quality and reliability of published research. Reviewers, motivated by tangible rewards, dedicate themselves to verifying the truthfulness and accuracy of articles more diligently. This approach not only enriches the available scientific content but also fosters a more collaborative and engaged community. With SciFiles, a new horizon opens for science, where transparency, collaboration, and innovation are the pillars of a more informed and connected future.

## Strategic

The strategic vision for SciFiles could be structured as follows:

**Mission:**
To revolutionize the field of scientific publishing through a platform that monetizes and decentralizes the validation of scientific articles, promoting a robust data economy and ensuring secure and open access to information for the global scientific community.

**Vision:**
To be the leading platform in scientific publishing that eliminates censorship barriers and allows knowledge to flow freely, reaching researchers from all corners of the planet.

**Values:**

- **Transparency:** Operating with total clarity in all validation and publication processes.
- **Collaboration:** Fostering a scientific community that works together for the advancement of knowledge.
- **Innovation:** Being at the forefront of technology and publication methods to continuously improve the quality of scientific content.

**Strategies:**

1. **Monetization and Decentralization:** Implementing a rewards system that motivates reviewers to conduct more rigorous and frequent evaluations, thereby improving the quality and reliability of published research.

1. **Open Access:** Ensuring that all articles are accessible without restrictions, supporting the dissemination of scientific knowledge.

1. **Censorship Elimination:** Creating an environment where scientific knowledge is not limited by censorship, allowing for equitable distribution of information.

1. **Collaborative Community:** Building a network of scientists and academics who contribute to collective growth and idea exchange.

**Long-Term Goals:**
- Establishing SciFiles as the gold standard in scientific publishing.
- Expanding the platform to include a broader range of scientific disciplines.
- Developing advanced technological tools to facilitate article review and publication. 
- Cultivating a global scientific community that is more collaborative and engaged.

## Technical description

*SciFile* is an innovative platform that integrates cutting-edge technologies to revolutionize the peer review process for scientific articles. By utilizing the *FILE COIN VIRTUAL MACHINE* and an *ERC-1155 smart contract*, SciFile offers a decentralized and secure system for evaluating research papers by field experts. 

The backend, developed in *Python* <https://github.com/Oriojas/SciFile-IPFS.git> using the *FastAPI framework, ensures optimal performance and seamless integration with **Lighthouse, allowing storage of article PDFs and their metadata on the **InterPlanetary File System (IPFS)*, ensuring long-term availability and persistence.

The frontend, created with *React, provides an intuitive and efficient user interface, while the **ethers.js library* facilitates interaction with the smart contract on the blockchain. Additionally, a *PostgreSQL database* has been implemented to index information from the smart contract. This read-only database enhances user experience, enabling fast searches and data accessibility without compromising the security and integrity of information stored on the blockchain.

*SciFile* represents a significant step toward democratizing scientific knowledge, promoting transparency and collaboration within the scientific community. With its focus on security, efficiency, and accessibility, SciFile is well-positioned to become a benchmark in scientific publication management and the peer review process, contributing to the advancement of science and technology.

## Demo
<https://dorahacks.io/buidl/10846>
<https://quick-raincoat-crooked.on-fleek.app/>

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
