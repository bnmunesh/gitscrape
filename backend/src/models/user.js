module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
      },
      avatar_url: DataTypes.STRING,
      url: DataTypes.STRING,
      html_url: DataTypes.STRING,
      followers_url: DataTypes.STRING,
      following_url: DataTypes.STRING,
      repos_url: DataTypes.STRING,
      
      name: DataTypes.STRING,
      company: DataTypes.STRING,
      blog: DataTypes.TEXT,
      location: DataTypes.STRING,
      email: DataTypes.STRING,
      bio: DataTypes.TEXT,
      twitter_username: DataTypes.STRING,
      public_repos: DataTypes.INTEGER,
      public_gists: DataTypes.INTEGER,
      followers: DataTypes.INTEGER,
      following: DataTypes.INTEGER,
      github_created_at: DataTypes.DATE,
      github_updated_at: DataTypes.DATE,
    }, {
      paranoid: true,
      timestamps: true, 
    });

    User.associate = function(models){
      User.hasMany(models.Repository, {
        foreignKey: 'username',
        as: 'repositories'
      });

      User.hasMany(models.Follower, {
        foreignKey: 'username',
        as: 'follower'
      });
    };
  
    return User;
  };